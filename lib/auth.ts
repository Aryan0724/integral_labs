import crypto from 'crypto';

export const AUTH_COOKIE_NAME = 'admin_auth';
export const SESSION_DURATION_SECONDS = 86400; // 24 hours

export interface SessionPayload {
  sub: string;
  iat: number;
  exp: number;
  jti: string;
}

export interface VerifyResult {
  valid: boolean;
  reason?: string;
  payload?: SessionPayload;
}

// In-memory revocation blocklist: jti -> expiration timestamp
const revokedTokensStore = new Map<string, number>();

/**
 * Derives the HMAC signing secret.
 * IN PRODUCTION:
 * - Strictly requires dedicated ADMIN_SESSION_SECRET with at least 32 characters.
 * - NEVER falls back to ADMIN_PASSWORD.
 * - If missing or insufficient, fails closed and returns null.
 * IN DEVELOPMENT / TEST:
 * - Falls back to a deterministic development key when unconfigured.
 */
export function getSessionSecret(): string | null {
  if (process.env.NODE_ENV === 'production') {
    const dedicatedSecret = process.env.ADMIN_SESSION_SECRET;
    if (!dedicatedSecret || dedicatedSecret.trim().length < 32) {
      console.error('[AUTH CRITICAL] In production, ADMIN_SESSION_SECRET must be configured with at least 32 characters. Authentication failed closed.');
      return null;
    }
    return dedicatedSecret.trim();
  }

  return process.env.ADMIN_SESSION_SECRET || 'dev_secret_integral_labs_internal_development_only_key_2026';
}

/**
 * Creates a cryptographically signed, stateless session token.
 * Format: <base64url(payload)>.<base64url(hmac-sha256)>
 */
export function createSessionToken(subject = 'admin', durationSeconds = SESSION_DURATION_SECONDS): string | null {
  const secret = getSessionSecret();
  if (!secret) {
    return null;
  }

  const now = Math.floor(Date.now() / 1000);
  const payload: SessionPayload = {
    sub: subject,
    iat: now,
    exp: now + durationSeconds,
    jti: crypto.randomUUID(),
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payloadB64);
  const signatureB64 = hmac.digest('base64url');

  return `${payloadB64}.${signatureB64}`;
}

/**
 * Records a session token's jti as revoked.
 * Used during logout to invalidate the token before its natural expiration.
 */
export function revokeSessionToken(token: string | undefined | null): boolean {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;

  try {
    const payloadJson = Buffer.from(parts[0], 'base64url').toString('utf-8');
    const payload = JSON.parse(payloadJson) as SessionPayload;
    if (payload && payload.jti && typeof payload.exp === 'number') {
      const now = Math.floor(Date.now() / 1000);
      // Prune already expired entries to avoid memory growth
      for (const [jti, exp] of revokedTokensStore.entries()) {
        if (exp <= now) {
          revokedTokensStore.delete(jti);
        }
      }
      revokedTokensStore.set(payload.jti, payload.exp);
      return true;
    }
  } catch {
    // Malformed token payload cannot be decoded
  }
  return false;
}

/**
 * Checks whether a token identifier (jti) has been explicitly revoked.
 */
export function isTokenRevoked(jti: string): boolean {
  const exp = revokedTokensStore.get(jti);
  if (!exp) return false;
  const now = Math.floor(Date.now() / 1000);
  if (exp <= now) {
    revokedTokensStore.delete(jti);
    return false;
  }
  return true;
}

export function clearRevocationStore(): void {
  revokedTokensStore.clear();
}

/**
 * Validates a session token using constant-time signature verification,
 * payload schema verification, time bounds, and server-side revocation checks.
 */
export function verifySessionToken(token: string | undefined | null): VerifyResult {
  if (!token || typeof token !== 'string') {
    return { valid: false, reason: 'Missing token' };
  }

  const parts = token.split('.');
  if (parts.length !== 2) {
    return { valid: false, reason: 'Malformed token structure' };
  }

  const [payloadB64, signatureB64] = parts;
  if (!payloadB64 || !signatureB64) {
    return { valid: false, reason: 'Malformed token segments' };
  }

  const secret = getSessionSecret();
  if (!secret) {
    return { valid: false, reason: 'Session secret unconfigured in production' };
  }

  try {
    // Recompute signature
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(payloadB64);
    const expectedSigB64 = hmac.digest('base64url');

    const expectedBuf = Buffer.from(expectedSigB64, 'utf-8');
    const providedBuf = Buffer.from(signatureB64, 'utf-8');

    if (expectedBuf.length !== providedBuf.length) {
      return { valid: false, reason: 'Invalid signature length' };
    }

    if (!crypto.timingSafeEqual(expectedBuf, providedBuf)) {
      return { valid: false, reason: 'Signature mismatch' };
    }

    // Decode and validate payload
    const payloadJson = Buffer.from(payloadB64, 'base64url').toString('utf-8');
    let payload: SessionPayload;
    try {
      payload = JSON.parse(payloadJson);
    } catch {
      return { valid: false, reason: 'Invalid payload JSON' };
    }

    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return { valid: false, reason: 'Invalid payload structure' };
    }

    if (payload.sub !== 'admin') {
      return { valid: false, reason: 'Unauthorized subject' };
    }

    if (typeof payload.iat !== 'number' || typeof payload.exp !== 'number' || typeof payload.jti !== 'string') {
      return { valid: false, reason: 'Invalid payload field types' };
    }

    if (payload.jti.trim().length < 16) {
      return { valid: false, reason: 'Malformed token identifier' };
    }

    const now = Math.floor(Date.now() / 1000);

    // Reject tokens claiming issuance in the future (with 60s tolerance for clock drift)
    if (payload.iat > now + 60) {
      return { valid: false, reason: 'Token issued in the future' };
    }

    // Reject expired tokens
    if (payload.exp <= now) {
      return { valid: false, reason: 'Session expired' };
    }

    // Reject tokens exceeding allowable lifetime policy (24h + 60s drift)
    if (payload.exp - payload.iat > SESSION_DURATION_SECONDS + 60) {
      return { valid: false, reason: 'Session duration exceeds policy' };
    }

    // Check server-side revocation
    if (isTokenRevoked(payload.jti)) {
      return { valid: false, reason: 'Session has been revoked' };
    }

    return { valid: true, payload };
  } catch (err: any) {
    return { valid: false, reason: 'Verification error: ' + (err?.message || 'unknown') };
  }
}

/**
 * Cookie options standardizer for administrative session cookies.
 */
export function getAuthCookieOptions(maxAgeSeconds = SESSION_DURATION_SECONDS) {
  return {
    path: '/',
    maxAge: maxAgeSeconds,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
  };
}

// In-memory sliding window rate limiter for brute-force protection
interface RateLimitEntry {
  attempts: number;
  resetAt: number;
}
const rateLimitStore = new Map<string, RateLimitEntry>();

export function checkRateLimit(
  identifier: string,
  maxAttempts = 5,
  windowMs = 15 * 60 * 1000
): { allowed: boolean; remaining: number; retryAfterSeconds?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(identifier, { attempts: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: maxAttempts - 1 };
  }

  if (entry.attempts >= maxAttempts) {
    const retryAfterSeconds = Math.ceil((entry.resetAt - now) / 1000);
    return { allowed: false, remaining: 0, retryAfterSeconds };
  }

  entry.attempts += 1;
  return { allowed: true, remaining: maxAttempts - entry.attempts };
}

export function resetRateLimit(identifier: string): void {
  rateLimitStore.delete(identifier);
}
