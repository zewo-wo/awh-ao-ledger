// Fixed Network-First Service Worker for GitHub Pages (prevents stale deployments & cross-origin crashes)
const SHELL_CACHE = 'warlord-hub-shell-v5';
const SHELL_ASSETS = ['./', './index.html', './404.html', './manifest.json', './silver-ledger-brand-crest.webp'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== SHELL_CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Only handle same-origin app shell; let cross-origin Albion APIs pass straight through cleanly
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(SHELL_CACHE);
    try {
      const fresh = await fetch(req);
      if (fresh && fresh.ok) await cache.put(req, fresh.clone());
      return fresh;
    } catch {
      const cached = await cache.match(req);
      if (cached) return cached;
      if (req.mode === 'navigate') return (await cache.match('./index.html')) || Response.error();
      return Response.error();
    }
  })());
});
