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
  '/app-script/app.js',
  '/app-script/manifest.json',
  '/app-script/sw.js',
  '/asset/icon/favicon.ico',
  '/asset/icon/main.png',
  '/css/index.css',

  //games file

  //2048 files
  '/games/2048/index.html',
  '/games/2048/css/style.css',
  '/games/2048/js/script.js',
  '/games/2048/js/libs/jquery/jquery-2.2.4.min.js',

  //gene files
  '/games/gene/style.css',
  '/games/gene/suika.html',

  //mine files
  '/games/mine/index.html',
  '/games/mine/main.js',
  '/games/mine/style.css',

  //osero files
  '/games/osero/index.html',
  '/games/osero/main.js',
  '/games/osero/style.css',

  //suika files
  '/games/suika/assets/dadaxigua.png',
  '/games/suika/res/import/0a/0ab855d50.json',
  '/games/suika/res/import/0d/0d669730c.json',
  '/games/suika/res/import/0e/0e4bc3b03.json',
  '/games/suika/res/import/04/049f3a810.json',
  '/games/suika/res/import/6f/6f801092-0c37-4f30-89ef-c8d960825b36.json',
  '/games/suika/res/import/07/07ce7530a.json',
  '/games/suika/res/import/07/079499991.json',
  '/games/suika/res/import/28/2874f8dd-416c-4440-81b7-555975426e93.json',
  '/games/suika/res/import/41/417a8a59-c0fc-4767-8be2-bf5124bb4b8d.json',
  '/games/suika/res/import/79/79eafaef-b7ef-45d9-9c3f-591dc836fc7a.json',
  '/games/suika/res/import/ec/eca5d2f2-8ef6-41c2-bbe6-f9c79d09c432.json',
  '/games/suika',

  //tetris files
  '/games/tetris',

  //tower game files
  '/games/tower',
  //game bgm
  '/games/tetris/tetris.mp3',
  '/games/suika/bgm.mp3',
  //other
  '/speed',
  '/'
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
