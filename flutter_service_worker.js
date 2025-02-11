'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6c4b5fe9a5e1493264af0cbbcc83be0d",
"assets/AssetManifest.bin.json": "2435abb8a9a7b00a132b2577d22cb031",
"assets/AssetManifest.json": "854a6514d29abb7d97c16aeb4dc0a70d",
"assets/assets/ai_chat.jpg": "1bf54f7131501cb51fbed16c5d5c2dfb",
"assets/assets/animations/game-over.json": "7215ee9c7d9dc229d2921a40e899ec5f",
"assets/assets/animations/success.json": "ba40674ea720c6da8550f19a34a3eb47",
"assets/assets/boy.jpg": "4cefc80c575fc55d774c64be24b94202",
"assets/assets/cat.jpg": "bbcd15d5e3e5a81093eff9838feb8387",
"assets/assets/flags/flag.png": "677d40fb1de1bb82f9ebea855e4f8a13",
"assets/assets/flags/germany.png": "4bb9cc39051d294b86d0050fd7b6f591",
"assets/assets/flags/italy.png": "6f6d09685eb03af0d9a6973b574fbbde",
"assets/assets/flags/spain.png": "de50a969192fded953b04a658a2e4cd9",
"assets/assets/flags/unitedstates.png": "c7ef7aeea67ae3612237fefcaa3b8db3",
"assets/assets/fonts/CraftworkGrotesk-Bold.ttf": "2e95ff7518b71c65a97f05f89a68e367",
"assets/assets/fonts/CraftworkGrotesk-Heavy.ttf": "08e8247441bb4ead56bb4fe018f44636",
"assets/assets/fonts/CraftworkGrotesk-Medium.ttf": "d2938463270cabc739ed09ca65a10756",
"assets/assets/fonts/CraftworkGrotesk-Regular.ttf": "b8aea41e0b181a85a82db6408df13264",
"assets/assets/fonts/CraftworkGrotesk-SemiBold.ttf": "de508903e2718c992eea60a468f3e9ee",
"assets/assets/games.jpg": "ba52bb5552e0c91ddcf176393cb464e1",
"assets/assets/login.png": "39189609139dc52782da28cd90df1341",
"assets/assets/logo.png": "57c09c6590721d03d930904275da9aa8",
"assets/assets/man.jpg": "563d7728a148977929c9af88dfe57a98",
"assets/assets/practice.jpg": "c6f37e50ae9138f8b59eadd443009046",
"assets/assets/profile.png": "a74968ee3db3fba68faef48764145216",
"assets/assets/pronunciation.jpg": "ba52bb5552e0c91ddcf176393cb464e1",
"assets/assets/register.png": "d33c1f3761d302679202be471df13b59",
"assets/assets/scenes/1.mp4": "db6c54419c6f0d55bbbdbf3ff72ac683",
"assets/assets/scenes/2.mp4": "a53e2ce14dae42227466368afe861ee9",
"assets/assets/scenes/3.mp4": "d6e0a0661a9db899d904b9b55afa7e10",
"assets/assets/scenes/4.mp4": "9112570520e295f9ea7786db9aa0d9ad",
"assets/assets/scenes/5.mp4": "a7b9ceb3e473f261c26109cdadf0da59",
"assets/assets/scenes/6.mp4": "003f320dbde2847d020dd187af8f50e1",
"assets/assets/welcome_illustration.png": "ef1f3b165b38cf52039faecd0ddecc8f",
"assets/FontManifest.json": "f5bec8051ee0377dc13ecf334149e148",
"assets/fonts/MaterialIcons-Regular.otf": "8ec6cdff3333ed8581a6a5aaf674e29e",
"assets/NOTICES": "c21a7d2bf0ff87bdec18151b7bcf08a6",
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
"flutter_bootstrap.js": "9a9ad0cc6940562d13fc1518a9302ed7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b1666d941f9b41dd6f9c50879be02a43",
"/": "b1666d941f9b41dd6f9c50879be02a43",
"main.dart.js": "f5019d1f7d79f95a83c26bc26569a929",
"manifest.json": "2395a6214c1dcf4820efe5763699e06a",
"version.json": "023313c17438aade7e45d3a478835824"};
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
