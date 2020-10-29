self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
  debug: true
})

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('install', evt => {
  console.log('service worker has been installed')
})

self.addEventListener('activate', evt => {
  console.log('service worker has been activate')
})

self.addEventListener('fetch', evt => {
  console.log('fetch event', evt)
})