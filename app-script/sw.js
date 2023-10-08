self.addEventListener('install', function(event) {
const indexPage = new Request('https://train-share.f5.si/');
event.waitUntil(
fetch(indexPage).then(function(response) {
return caches.open('pwabuilder-offline').then(function(cache) {
console.log('[PWA Builder] Cached index page during Install'+ response.url);
return cache.put(indexPage, response);
});
}));
});
self.addEventListener('fetch', function(event) {
const updateCache = function(request){
return caches.open('pwabuilder-offline').then(function (cache) {
return fetch(request).then(function (response) {
console.log('[PWA Builder] add page to offline'+response.url)
return cache.put(request, response);
});
});
};
event.waitUntil(updateCache(event.request));
event.respondWith(
fetch(event.request).catch(function(error) {
console.log( '[PWA Builder] Network request Failed. Serving content from cache: ' + error );
return caches.open('pwabuilder-offline').then(function (cache) {
return cache.match(event.request).then(function (matching) {
var report =  !matching || matching.status == 404?Promise.reject('no-match'): matching;
return report
});
});
})
);
})
// バージョン定義
var CACHE_VERSION = 'ca-v1';
var DISP_VERSION = 'ca-d-v1';

// キャッシュの対象にするディレクトリ（css/jsは個別で追加）
var resources = [
  '/',
  '/img',
  '/games',
  '/speed'
];

// キャッシュ追加
self.addEventListener('install', function (event) {
  console.log('ServiceWorker Install');
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(function (cache) {
        console.log('cache.addAll');
        cache.addAll(resources);
      })
  );
});
// キャッシュ表示
self.addEventListener('fetch', function (event) {
  console.log('ServiceWorker fetch');
  event.respondWith(
    // キャッシュが存在するかチェック
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        } else {
          // キャッシュがない場合キャッシュに入れる
          return fetch(event.request)
            .then(function (res) {
              return caches.open(DISP_VERSION)
                .then(function (cache) {
                  console.log('cache.put');
                  cache.put(event.request.url, res.clone());
                  return res;
                });
            })
            .catch(function () {
              // 何もしない
            });
        }
      })
  );
});
// 古いキャッシュを削除
self.addEventListener('activate', function (event) {
  console.log('activate ServiceWorker');
  event.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== CACHE_VERSION && key !== DISP_VERSION) {
            console.log('cache.delete');
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});
