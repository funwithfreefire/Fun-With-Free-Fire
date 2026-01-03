const CACHE_NAME = 'ff-fun-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'https://unpkg.com/nes.css@latest/css/nes.min.css'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
     .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetching assets from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
     .then(response => response |

| fetch(event.request))
  );
});
