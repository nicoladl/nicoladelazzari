import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:title', name: 'og:title', content: pkg.title },
      { property: 'og:description', name: 'og:description', content: pkg.description },
      { property: 'og:type', name: 'og:type', content: 'website' },
      { property: 'og:url', name: 'og:url', content: `nicoladelazzari.com` },
      { property: 'og:image', name: 'og:image', content: `/images/share.jpg` },
      { property: 'twitter:card', name: 'twitter:card', content: `summary_large_image` },
      { property: 'twitter:site', name: 'twitter:site', content: `@nicoladelazzari` },
      { property: 'twitter:creator', name: 'twitter:creator', content: `@nicoladelazzari` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: 'MyFontsWebfontsKit.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
 css: [
  '@/assets/scss/main.scss'
],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/scroll.js',
    '~/plugins/reveal.js',
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
