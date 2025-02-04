importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03bd32b.js",
    "revision": "4fb9e5d141f194479841e5722cddab2e"
  },
  {
    "url": "/_nuxt/0f36434.js",
    "revision": "dd9209cb2fcd61b00fefc2e50fb9f4ec"
  },
  {
    "url": "/_nuxt/2d29a64.js",
    "revision": "2cf3fcb377ef3469dc476df58d0ed7a5"
  },
  {
    "url": "/_nuxt/30e5add.js",
    "revision": "17ecbdc94fd9d042f4f60b40dd4df17e"
  },
  {
    "url": "/_nuxt/6c8891d.js",
    "revision": "5f6178e56270c3442b9cbd50993e7b5c"
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
