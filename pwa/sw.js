var CACHE_NAME = 'rss-reader-cache-v1';
var URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/?sources=bbc-news,cnn&apiKey=88323f990dab404cb1369f23f88a2053',
    '/?apiKey=88323f990dab404cb1369f23f88a2053',
    '/manifest.json',
    '/css/normalize.css',
    '/css/style.css',
    '/js/fetch.js',
    '/js/babel-polyfill.js',
    '/compiled/app.js',
    '/img/calendar.svg',
    '/img/check-mark.svg',
    '/img/news.svg',
    '/img/spinner.svg',
    '/img/rss-square-big.png',
    '/img/rss-square.png',
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', function(event) { 
    event.respondWith(
        caches.match(event.request).then(function(res) {
            return res || fetch(event.request).then(function(response) {
                return caches.open(CACHE_NAME).then(function(cache) {
                        console.log('[Service Worker] Caching new resource: ' + event.request.url);
                        cache.put(event.request, response.clone());
                        return response;
                });
            });
        })
    );
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if(CACHE_NAME.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
  });