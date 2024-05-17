//asignar un nombre y versión al caché
const CACHE_NAME='v1_cache_artvier_tattoo',
urlsToCache= [
    '/',
    'index.html'
]

// Instalación del service worker
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Cache abierta');
          return cache.addAll(urlsToCache);
        })
    );
  });
  // Fetch del service worker
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  });