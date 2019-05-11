import pkg from './package'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nicoladelazzari/'
  }
} : {}

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
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
  
  ...routerBase,

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
    '~/plugins/reveal.js'
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
