// Crawl the local site and report non-200 internal links and anchors that point at missing ids.
// Usage: node scripts/check-links.mjs [http://localhost:5006]
const base = process.argv[2] ?? 'http://localhost:5006';
const seen = new Map(); const queue = ['/']; const bad = []; const badHash = []; const html = new Map();
async function get(p) { if (html.has(p)) return html.get(p); const r = await fetch(base + p); const t = await r.text(); html.set(p, { status: r.status, text: t }); return html.get(p); }
const ids = (t) => new Set([...t.matchAll(/ id="([^"]+)"/g)].map((m) => m[1]));
while (queue.length) {
  const p = queue.shift(); if (seen.has(p)) continue;
  const { status, text } = await get(p); seen.set(p, status);
  if (status !== 200) { bad.push([p, status]); continue; }
  const own = ids(text);
  for (const m of text.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    const h = m[1]; if (/^(https?:|mailto:|tel:)/.test(h)) continue;
    let path = h, hash = '';
    if (h.startsWith('#')) { path = p; hash = h.slice(1); } else { [path, hash] = h.split('#'); }
    if (hash && path === p && !own.has(hash)) badHash.push([p, h]);
    else if (hash && path !== p) { const t = await get(path); if (t.status === 200 && !ids(t.text).has(hash)) badHash.push([p, h]); }
    if (!seen.has(path) && !queue.includes(path)) queue.push(path);
  }
}
console.log('pages crawled:', seen.size);
console.log('NON-200:', bad);
console.log('BROKEN ANCHORS:', [...new Set(badHash.map((x) => x.join(' -> ')))]);
process.exitCode = bad.length || badHash.length ? 1 : 0;
