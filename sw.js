const CACHE_NAME = 'transportes-puebla-v1';
const urlsToCache = [
  '/MapPue/',
  '/MapPue/index.html',
  '/MapPue/Icons/icon-512x512.png',
  '/MapPue/Icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
