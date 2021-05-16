importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09cbbcca04ed394c8f49.js",
    "revision": "377a1eb50f913384a0622cd2c70fce43"
  },
  {
    "url": "/_nuxt/11947b60766240fa6cdc.js",
    "revision": "8416f654f6cc1d14a4ff17c3c976e967"
  },
  {
    "url": "/_nuxt/758adcbe5d4eb5787eb3.js",
    "revision": "119e3f0550ca98998248e31a1672f605"
  },
  {
    "url": "/_nuxt/8d85b362feb52a355ede.js",
    "revision": "58457bf455811660e26f6b3e6e0a417e"
  },
  {
    "url": "/_nuxt/c7360660c76a3def9ac3.js",
    "revision": "4a04a0d61537dd61b67d139ec3e2b654"
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
