importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f513c7.js",
    "revision": "64656ff7187c02ccadcb30766bf2fb1d"
  },
  {
    "url": "/_nuxt/4cb0ca5.js",
    "revision": "ed79ea07485c3339bc1adcb4c0c557e0"
  },
  {
    "url": "/_nuxt/5163615.js",
    "revision": "ee2ef26c18bc46e64cc35e8d13005a88"
  },
  {
    "url": "/_nuxt/6497b4e.js",
    "revision": "14c20176287c78d0397f2afa97e88c37"
  },
  {
    "url": "/_nuxt/a2b9f67.js",
    "revision": "3f43e09b87a712f1041300330cc83c57"
  }
], {
  "cacheId": "nicoladelazzari",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
