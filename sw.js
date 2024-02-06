importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02402ae.js",
    "revision": "a732a93260054ec951968d0cb8063ad3"
  },
  {
    "url": "/_nuxt/0f513c7.js",
    "revision": "64656ff7187c02ccadcb30766bf2fb1d"
  },
  {
    "url": "/_nuxt/444dae8.js",
    "revision": "6b1599432a0c0080f019212b06d26eae"
  },
  {
    "url": "/_nuxt/5163615.js",
    "revision": "ee2ef26c18bc46e64cc35e8d13005a88"
  },
  {
    "url": "/_nuxt/e4aa364.js",
    "revision": "b8443c96d5fc88d7bd0b74def9148642"
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
