/* Schweden 2026 – Service Worker */
const VERSION = "sw26-v5";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  // Fremd-Origins (APIs, Karten): gar nicht anfassen – die App cached selbst und fängt Fehler ab
  if (url.origin !== location.origin) return;
  // App-Shell: network-first mit 2,5-s-Timeout (im Funkloch kommt sofort der Cache),
  // nur erfolgreiche Antworten werden gecacht
  if (e.request.mode === "navigate" || url.pathname.endsWith("index.html")) {
    e.respondWith((async () => {
      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 2500);
        const r = await fetch(e.request, { signal: ctrl.signal });
        clearTimeout(timer);
        if (r.ok) {
          const copy = r.clone();
          caches.open(VERSION).then(c => c.put(e.request, copy));
        }
        return r;
      } catch (err) {
        const m = await caches.match(e.request) || await caches.match("./index.html");
        return m || Response.error();
      }
    })());
    return;
  }
  // Rest (Icons, Manifest): cache-first, Fehlerantworten nie cachen
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(e.request, copy));
      }
      return res;
    }))
  );
});
