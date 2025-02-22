'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2ac6cb2310e3d1e4774f107c46b724c0",
"assets/AssetManifest.bin.json": "df3bf18258a2f4983b01b8b94eb340e9",
"assets/AssetManifest.json": "b450164e30f721bb52da7cb2ae03b0f2",
"assets/assets/audio/click.ogg": "a564f94814c0ec5bce1c86d5f0cfaf76",
"assets/assets/audio/collect.ogg": "33ab4a57f985379bdf95bc766fc2fb79",
"assets/assets/audio/explode1.ogg": "dca38b88366c36dc5fa620fb429c4130",
"assets/assets/audio/explode2.ogg": "5fe26aa6c3a4d4fc2ce5af82c377545a",
"assets/assets/audio/fire.ogg": "85e98512604a75d36dfbd16b3463100f",
"assets/assets/audio/hit.ogg": "65e092e42155b29ecf34a9fc8ac6d57f",
"assets/assets/audio/laser.ogg": "ce432ac1bfab05652e13f0904a79b781",
"assets/assets/audio/music.ogg": "fd9c0c2f2b2ab813db0d2ee946426128",
"assets/assets/audio/start.ogg": "7e10ddfab4c08008b805d5cbbc1dc521",
"assets/assets/images/arrow_button.png": "eebeb28bb53db56d3675340770a424de",
"assets/assets/images/asteroid1.png": "783dbdb7028ed4c2df5b64f3bc4f5568",
"assets/assets/images/asteroid2.png": "edee91b022c7b3b818401f4ee6f3d7d9",
"assets/assets/images/asteroid3.png": "1d251a4386b36637504eee844fe6c1f2",
"assets/assets/images/audio_button.png": "d05d1e686f039368e81aed0750b86cd8",
"assets/assets/images/bomb.png": "7555cda204812dcecfaaa522c4a473f2",
"assets/assets/images/bomb_pickup.png": "1a4eb5fcda4fb7693c304125212ad410",
"assets/assets/images/exit_button.png": "908a3b269768fff687c12ff9e13586ec",
"assets/assets/images/joystick_background.png": "f233a7fe16b8c686f7734200f3917477",
"assets/assets/images/joystick_knob.png": "abf7955eeaeeb7ac22bab1f0880de9b2",
"assets/assets/images/laser.png": "52f977c2738dbdb121a3eba7cccecdf9",
"assets/assets/images/laser_pickup.png": "efd6299aff3a9423150575599314bb72",
"assets/assets/images/player_blue_off.png": "16246bb31cc6338b1258178258e76ccb",
"assets/assets/images/player_blue_on0.png": "80564e89cd5bf599d51a0168bb062821",
"assets/assets/images/player_blue_on1.png": "c021b2a53c427fcbc354736da4fe8d82",
"assets/assets/images/player_green_off.png": "cf2c4312dba43848ba71785bf4caaa6a",
"assets/assets/images/player_green_on0.png": "43ae9e2eeb86ad2fc6a6f7fb501d243d",
"assets/assets/images/player_green_on1.png": "c3c62a5a8c137f49d9e45d6995e4cf4f",
"assets/assets/images/player_purple_off.png": "7f5be9512c87eaadfb6f4ed14457d4de",
"assets/assets/images/player_purple_on0.png": "20f3633dabdbf045220ad9c8d1e72685",
"assets/assets/images/player_purple_on1.png": "76e6316cd7ead3ad087e2b8302523ff9",
"assets/assets/images/player_red_off.png": "92b96b5d035e8db17507f63f011de16d",
"assets/assets/images/player_red_on0.png": "687b9fe826f83005c17d4932bb6fe2e3",
"assets/assets/images/player_red_on1.png": "9811eb9a56eb8ae775c162daf9f9865d",
"assets/assets/images/shield.png": "257d515966c59ec79fae0e8c6c388764",
"assets/assets/images/shield_pickup.png": "5a00ee27c6c9699374ad6da659b8d4d3",
"assets/assets/images/shoot_button.png": "8138b58a4d36cab488056d633ca7c599",
"assets/assets/images/start_button.png": "6a770bbe1defa45bdd24b86d00ce3e44",
"assets/assets/images/title.png": "397bad8954faebf9d73ad4a3cd1627eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "518dda0b42e73cb166c535a281b3c3db",
"assets/NOTICES": "33f975f8571596e7c147cd60107a7491",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "3849b41b65379766d22ee9d6cde08f73",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dddeb96b180030b414bbf067b00a1332",
"/": "dddeb96b180030b414bbf067b00a1332",
"main.dart.js": "8730c6d3df6c4cc72ccb746ffc72c309",
"manifest.json": "9f1bbcbb3f1e9d5985aa4831f6809693",
"version.json": "8d1be46ae123793336796c6a54b079bf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
