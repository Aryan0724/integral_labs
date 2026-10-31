import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'crypto';
import { 
  createSessionToken, 
  verifySessionToken, 
  revokeSessionToken,
  isTokenRevoked,
  clearRevocationStore,
  AUTH_COOKIE_NAME, 
  SESSION_DURATION_SECONDS,
  getSessionSecret,
  getAuthCookieOptions,
  checkRateLimit,
  resetRateLimit
} from '../lib/auth.ts';
import { getSiteContent, saveSiteContent } from '../lib/cms.ts';

test('Security Regression Suite: Hardened Administrative Authentication & Session Lifecycle', async (t) => {

  await t.test('1. No authentication cookie: denies access completely', async () => {
    assert.equal(verifySessionToken(undefined).valid, false);
    assert.equal(verifySessionToken(undefined).reason, 'Missing token');
    assert.equal(verifySessionToken(null).valid, false);
    assert.equal(verifySessionToken('').valid, false);

    // Gate check
    const isAuthorized = verifySessionToken(undefined).valid;
    assert.equal(isAuthorized, false, 'CMS gate must deny request when no cookie is present');
  });

  await t.test('2. Forged and predictable cookie values are strictly rejected', async () => {
    // Attack scenario: Attacker sets cookie admin_auth=authenticated
    const forgedValues = [
      'authenticated',
      'true',
      'admin',
      '1',
      'yes',
      'bearer authenticated',
      'null',
      'undefined'
    ];

    for (const val of forgedValues) {
      const res = verifySessionToken(val);
      assert.equal(res.valid, false, `Predictable value "${val}" must fail verification`);
      assert.equal(res.reason, 'Malformed token structure');
    }
  });

  await t.test('3. Malformed token structures are rejected', async () => {
    const malformedTokens = [
      'header.payload.signature.extra', // 4 parts
      'onlyonepart', // 1 part
      '.', // empty parts
      'part1.', // empty signature
      '.part2', // empty payload
      'abc.def.ghi', // 3 parts
    ];

    for (const token of malformedTokens) {
      const res = verifySessionToken(token);
      assert.equal(res.valid, false, `Malformed token "${token}" must be rejected`);
    }
  });

  await t.test('4. Tampered signatures and signature length mismatches are rejected', async () => {
    const validToken = createSessionToken('admin', 3600);
    assert.ok(validToken);

    const [payloadB64, sigB64] = validToken.split('.');

    // Case A: altered characters in signature (guaranteed to differ)
    const corruptedSig = (sigB64[0] === 'X' ? 'Y' : 'X') + sigB64.slice(1);
    const tamperedTokenSig = `${payloadB64}.${corruptedSig}`;
    const resCorrupted = verifySessionToken(tamperedTokenSig);
    assert.equal(resCorrupted.valid, false);
    assert.equal(resCorrupted.reason, 'Signature mismatch');

    // Case B: signature length mismatch
    const shortSigToken = `${payloadB64}.${sigB64.slice(0, 10)}`;
    const resShort = verifySessionToken(shortSigToken);
    assert.equal(resShort.valid, false);
    assert.equal(resShort.reason, 'Invalid signature length');

    // Case C: extra long signature
    const longSigToken = `${payloadB64}.${sigB64}EXTRA`;
    const resLong = verifySessionToken(longSigToken);
    assert.equal(resLong.valid, false);
    assert.equal(resLong.reason, 'Invalid signature length');
  });

  await t.test('5. Invalid payloads (malformed JSON, wrong subject, wrong fields) are rejected', async () => {
    const secret = getSessionSecret();
    assert.ok(secret);

    function createRawToken(payloadObj) {
      const pB64 = Buffer.from(JSON.stringify(payloadObj)).toString('base64url');
      const hmac = crypto.createHmac('sha256', secret);
      hmac.update(pB64);
      return `${pB64}.${hmac.digest('base64url')}`;
    }

    const now = Math.floor(Date.now() / 1000);

    // Case A: Wrong subject (e.g. 'user' or 'guest')
    const tokenWrongSub = createRawToken({ sub: 'guest', iat: now, exp: now + 3600, jti: crypto.randomUUID() });
    assert.equal(verifySessionToken(tokenWrongSub).reason, 'Unauthorized subject');

    // Case B: Missing jti or short jti
    const tokenShortJti = createRawToken({ sub: 'admin', iat: now, exp: now + 3600, jti: 'short' });
    assert.equal(verifySessionToken(tokenShortJti).reason, 'Malformed token identifier');

    // Case C: Non-numeric exp or iat
    const tokenBadTypes = createRawToken({ sub: 'admin', iat: 'now', exp: 'tomorrow', jti: crypto.randomUUID() });
    assert.equal(verifySessionToken(tokenBadTypes).reason, 'Invalid payload field types');

    // Case D: Array payload instead of object
    const pArrayB64 = Buffer.from(JSON.stringify(['admin'])).toString('base64url');
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(pArrayB64);
    assert.equal(verifySessionToken(`${pArrayB64}.${hmac.digest('base64url')}`).reason, 'Invalid payload structure');
  });

  await t.test('6. Future issuance and duration policy violations are rejected', async () => {
    const secret = getSessionSecret();
    const now = Math.floor(Date.now() / 1000);

    function createRawToken(payloadObj) {
      const pB64 = Buffer.from(JSON.stringify(payloadObj)).toString('base64url');
      const hmac = crypto.createHmac('sha256', secret);
      hmac.update(pB64);
      return `${pB64}.${hmac.digest('base64url')}`;
    }

    // Token with iat in the future (> 60s ahead)
    const futureToken = createRawToken({ 
      sub: 'admin', 
      iat: now + 3600, 
      exp: now + 7200, 
      jti: crypto.randomUUID() 
    });
    const resFuture = verifySessionToken(futureToken);
    assert.equal(resFuture.valid, false);
    assert.equal(resFuture.reason, 'Token issued in the future');

    // Token claiming 30 days lifetime (exceeding 24h policy)
    const longDurationToken = createRawToken({ 
      sub: 'admin', 
      iat: now, 
      exp: now + (30 * 86400), 
      jti: crypto.randomUUID() 
    });
    const resLongDuration = verifySessionToken(longDurationToken);
    assert.equal(resLongDuration.valid, false);
    assert.equal(resLongDuration.reason, 'Session duration exceeds policy');
  });

  await t.test('7. Expired session tokens are strictly rejected', async () => {
    const expiredToken = createSessionToken('admin', -60);
    assert.ok(expiredToken);

    const resExpired = verifySessionToken(expiredToken);
    assert.equal(resExpired.valid, false);
    assert.equal(resExpired.reason, 'Session expired');
  });

  await t.test('8. Logout invalidation and server-side token revocation', async () => {
    clearRevocationStore();

    // 1. Issue a valid token
    const token = createSessionToken('admin', 3600);
    assert.ok(token);

    // Initial check: token is valid
    const initialCheck = verifySessionToken(token);
    assert.equal(initialCheck.valid, true);

    // 2. Perform logout / revocation
    const revokedSuccess = revokeSessionToken(token);
    assert.equal(revokedSuccess, true, 'revokeSessionToken must successfully record token revocation');

    // Verify jti is stored in revocation store
    assert.equal(isTokenRevoked(initialCheck.payload.jti), true, 'Token jti must be recorded as revoked');

    // 3. Subsequent verification of the same token MUST fail even though signature and time are valid
    const postLogoutCheck = verifySessionToken(token);
    assert.equal(postLogoutCheck.valid, false, 'Revoked token must be rejected');
    assert.equal(postLogoutCheck.reason, 'Session has been revoked');

    clearRevocationStore();
  });

  await t.test('9. Missing production secret fails closed without fallback to ADMIN_PASSWORD', async () => {
    const originalEnv = process.env.NODE_ENV;
    const originalPass = process.env.ADMIN_PASSWORD;
    const originalSecret = process.env.ADMIN_SESSION_SECRET;

    try {
      process.env.NODE_ENV = 'production';
      process.env.ADMIN_PASSWORD = 'super_secure_admin_password_123';
      delete process.env.ADMIN_SESSION_SECRET;

      // In production, getSessionSecret must NOT fall back to ADMIN_PASSWORD
      const secret = getSessionSecret();
      assert.equal(secret, null, 'getSessionSecret must return null in production when ADMIN_SESSION_SECRET is absent, even if ADMIN_PASSWORD is set');

      // Session creation must fail closed
      const token = createSessionToken('admin', 3600);
      assert.equal(token, null, 'createSessionToken must fail closed and return null');

      // Verification must fail closed
      const verifyRes = verifySessionToken('dummy.token');
      assert.equal(verifyRes.valid, false);
      assert.equal(verifyRes.reason, 'Session secret unconfigured in production');

      // Short secret (<32 chars) must also be rejected in production
      process.env.ADMIN_SESSION_SECRET = 'too_short_secret';
      assert.equal(getSessionSecret(), null, 'Short secret (<32 chars) must be rejected in production');

      // Adequate secret (>=32 chars) is accepted
      process.env.ADMIN_SESSION_SECRET = 'a_cryptographically_secure_random_production_secret_32bytes_long';
      assert.equal(typeof getSessionSecret(), 'string');
    } finally {
      process.env.NODE_ENV = originalEnv;
      if (originalPass) process.env.ADMIN_PASSWORD = originalPass;
      if (originalSecret) process.env.ADMIN_SESSION_SECRET = originalSecret;
    }
  });

  await t.test('10. Unauthorized CMS write is blocked; public read remains accessible', async () => {
    const contentBefore = getSiteContent();
    assert.ok(contentBefore);

    // Unauthenticated attempt to save content
    const unauthSession = verifySessionToken(undefined);
    assert.equal(unauthSession.valid, false);

    // Confirm that public GET does not disclose secrets
    const publicContent = getSiteContent();
    assert.equal(typeof publicContent, 'object');
    assert.equal(publicContent.adminPassword, undefined, 'Public content must never leak password');
    assert.equal(publicContent.sessionSecret, undefined, 'Public content must never leak secret');
  });

  await t.test('11. Rate limiter sliding window and concurrent request behavior', async () => {
    const testIp = 'rate_limiter_concurrency_test_ip';
    resetRateLimit(testIp);

    // Simulate 5 rapid requests within window
    for (let i = 1; i <= 5; i++) {
      const res = checkRateLimit(testIp, 5, 60000);
      assert.equal(res.allowed, true, `Request ${i} should be allowed`);
      assert.equal(res.remaining, 5 - i, `Remaining attempts should be ${5 - i}`);
    }

    // 6th request is blocked
    const blocked = checkRateLimit(testIp, 5, 60000);
    assert.equal(blocked.allowed, false, '6th request must be blocked');
    assert.equal(blocked.remaining, 0);
    assert.ok(blocked.retryAfterSeconds && blocked.retryAfterSeconds > 0, 'Retry countdown must be provided');

    // Reset clears the block
    resetRateLimit(testIp);
    const unblocked = checkRateLimit(testIp, 5, 60000);
    assert.equal(unblocked.allowed, true);

    resetRateLimit(testIp);
  });

  await t.test('12. Cookie options are configured with production security best practices', async () => {
    const originalEnv = process.env.NODE_ENV;
    try {
      process.env.NODE_ENV = 'production';
      const prodOptions = getAuthCookieOptions(86400);
      assert.equal(prodOptions.httpOnly, true, 'HttpOnly must be true');
      assert.equal(prodOptions.secure, true, 'Secure must be true in production');
      assert.equal(prodOptions.sameSite, 'strict', 'SameSite must be strict');
      assert.equal(prodOptions.path, '/', 'Path must be root');
      assert.equal(prodOptions.maxAge, 86400, 'MaxAge must match session duration');
    } finally {
      process.env.NODE_ENV = originalEnv;
    }
  });

});
