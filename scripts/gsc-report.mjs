#!/usr/bin/env node
/**
 * On-demand Search Console report via the official Search Console API.
 * Auth: service account (read-only). The key file lives OUTSIDE this repo
 * (repo is public — never commit credentials).
 *
 * Setup (one time):
 *   1. console.cloud.google.com -> new project
 *   2. APIs & Services -> Library -> enable "Google Search Console API"
 *   3. IAM & Admin -> Service Accounts -> create one (no roles needed)
 *      -> Keys -> Add key -> Create new key -> JSON -> download
 *   4. Move the JSON to C:\Users\Aryan\.gsc\sa.json
 *   5. GSC -> Settings -> Users and permissions -> Add user
 *      -> paste the service-account email -> permission: Owner
 *
 * Usage:
 *   node scripts/gsc-report.mjs                       (performance, last 28 days)
 *   node scripts/gsc-report.mjs --days 7 --queries 15
 *   node scripts/gsc-report.mjs inspect <url> [url2...]
 *
 * Env overrides:
 *   GSC_KEY_PATH  (default: C:\Users\Aryan\.gsc\sa.json)
 *   GSC_SITE_URL  (default: https://labs.integralgroups.in/)
 */
import fs from "node:fs";
import crypto from "node:crypto";

const SITE = process.env.GSC_SITE_URL || "https://labs.integralgroups.in/";
const KEY_PATH = process.env.GSC_KEY_PATH || "C:\\Users\\Aryan\\.gsc\\sa.json";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";

const args = process.argv.slice(2);
const getArg = (name, dflt) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : dflt;
};
const DAYS = parseInt(getArg("--days", "28"), 10);
const QLIMIT = parseInt(getArg("--queries", "25"), 10);
const MODE = args[0] === "inspect" ? "inspect" : args[0] === "sites" ? "sites" : "report";
const INSPECT_URLS = MODE === "inspect" ? args.slice(1).filter((a) => !a.startsWith("--")) : [];

function die(msg) {
  console.error(msg);
  process.exit(1);
}

// --- service account JWT -> access token ------------------------------------
let key;
try {
  key = JSON.parse(fs.readFileSync(KEY_PATH, "utf8"));
} catch {
  die(`Key file not found at ${KEY_PATH}\nFollow the setup steps in the header of this script.`);
}

const now = Math.floor(Date.now() / 1000);
const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
const header = b64({ alg: "RS256", typ: "JWT" });
const claims = b64({
  iss: key.client_email,
  scope: SCOPE,
  aud: key.token_uri,
  iat: now,
  exp: now + 3600,
});
const signature = crypto
  .createSign("RSA-SHA256")
  .update(`${header}.${claims}`)
  .sign(key.private_key, "base64url");

const tokenRes = await fetch(key.token_uri, {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: `${header}.${claims}.${signature}`,
  }),
});
if (!tokenRes.ok) die(`Token exchange failed (${tokenRes.status}): ${await tokenRes.text()}`);
const { access_token } = await tokenRes.json();
const auth = { authorization: `Bearer ${access_token}` };

const endpoint = (p) => `https://searchconsole.googleapis.com/${p}`;

// --- performance query -------------------------------------------------------
async function searchAnalytics(dimensions, extra = {}) {
  const end = new Date().toISOString().slice(0, 10);
  const start = new Date(Date.now() - DAYS * 86400000).toISOString().slice(0, 10);
  const r = await fetch(
    endpoint(`webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`),
    {
      method: "POST",
      headers: { ...auth, "content-type": "application/json" },
      body: JSON.stringify({ startDate: start, endDate: end, dimensions, rowLimit: QLIMIT, ...extra }),
    }
  );
  if (!r.ok) {
    const body = await r.text();
    if (r.status === 403 && /has not been used|disabled/i.test(body))
      die(`The Search Console API is not enabled on this GCP project yet (step 2 of setup).`);
    if (r.status === 403)
      die(`Permission denied. Either the service account is not added as a GSC user yet (step 5), or permissions have not propagated (can take a few minutes). Details:\n${body}`);
    if (r.status === 404)
      die(`Property not registered for this service account (${SITE}). Add it as a user in GSC settings (step 5).`);
    die(`searchAnalytics failed (${r.status}): ${body}`);
  }
  return (await r.json()).rows ?? [];
}

// --- URL inspection ----------------------------------------------------------
async function inspect(url) {
  const r = await fetch(endpoint("v1/urlInspection/index:inspect"), {
    method: "POST",
    headers: { ...auth, "content-type": "application/json" },
    body: JSON.stringify({ siteUrl: SITE, inspectionUrl: url, languageCode: "en-US" }),
  });
  if (!r.ok) die(`inspect failed (${r.status}): ${await r.text()}`);
  const j = await r.json();
  const s = j.inspectionResult?.indexStatusResult ?? {};
  return {
    url: url.replace(/^https?:\/\//, ""),
    verdict: s.verdict,
    coverage: s.coverageState,
    crawl: s.lastCrawlTime ? s.lastCrawlTime.slice(0, 10) : "n/a",
    canonical: (s.googleCanonical || "").replace(/^https?:\/\//, "") || "n/a",
  };
}

// --- run ---------------------------------------------------------------------
if (MODE === "sites") {
  const r = await fetch(endpoint("webmasters/v3/sites"), { headers: auth });
  if (!r.ok) {
    const body = await r.text();
    if (r.status === 403 && /has not been used|disabled/i.test(body))
      die(`The Search Console API is not enabled on this GCP project yet (step 2 of setup).`);
    die(`Listing sites failed (${r.status}). If permission denied, the key may not match the granted service account. Details:\n${body}`);
  }
  const j = await r.json();
  console.table((j.siteEntry ?? []).map((s) => ({ site: s.siteUrl, permission: s.permissionLevel })));
} else if (MODE === "inspect") {
  const results = [];
  for (const u of INSPECT_URLS) results.push(await inspect(u));
  console.table(results);
} else {
  const [totals] = await searchAnalytics([]);
  const topQueries = await searchAnalytics(["query"]);
  const topPages = await searchAnalytics(["page"]);

  console.log(`\nGSC performance — ${SITE} — last ${DAYS} days\n`);
  if (!totals) {
    console.log("No data rows yet (new property, or data lagging ~2 days).");
  } else {
    console.log(
      `TOTAL  clicks: ${totals.clicks}  impressions: ${totals.impressions}  ctr: ${(totals.ctr * 100).toFixed(1)}%  avg-position: ${totals.position.toFixed(1)}`
    );
  }
  if (topQueries.length) {
    console.log("\nTop queries:");
    console.table(
      topQueries.map((q) => ({
        query: q.keys[0],
        clicks: q.clicks,
        impressions: q.impressions,
        position: q.position.toFixed(1),
      }))
    );
  }
  if (topPages.length) {
    console.log("Top pages:");
    console.table(
      topPages.map((p) => ({
        page: p.keys[0].replace(/^https?:\/\/[^/]+/, ""),
        clicks: p.clicks,
        impressions: p.impressions,
        position: p.position.toFixed(1),
      }))
    );
  }
}
