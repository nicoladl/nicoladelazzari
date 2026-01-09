importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03bd32b.js",
    "revision": "4fb9e5d141f194479841e5722cddab2e"
  },
  {
    "url": "/_nuxt/6c8891d.js",
    "revision": "5f6178e56270c3442b9cbd50993e7b5c"
  },
  {
    "url": "/_nuxt/6cd6da3.js",
    "revision": "584fa2c55e4cc4146b71ec7d48889e00"
  },
  {
    "url": "/_nuxt/b18a5b3.js",
    "revision": "dd9209cb2fcd61b00fefc2e50fb9f4ec"
  },
  {
    "url": "/_nuxt/f1783a8.js",
    "revision": "2cf3fcb377ef3469dc476df58d0ed7a5"
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
