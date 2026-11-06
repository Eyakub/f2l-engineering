// Self-destructing service worker. The previous Next.js app on this origin
// registered /sw.js; returning visitors' browsers re-fetch this exact URL on
// update, so this replaces the old worker, clears its caches, unregisters
// itself and reloads open tabs. The new site never registers a service worker.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => {
        if ("navigate" in client) client.navigate(client.url);
      });
    })(),
  );
});
