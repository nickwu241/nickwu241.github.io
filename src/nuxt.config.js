export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nicholas Wu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'author', content: 'Nicholas Wu' },
      {
        name: 'keywords',
        content: 'Nicholas Wu, Nicholas, Nick, Wu, nickwu241'
      },
      {
        name: 'url',
        content: 'https://nickwu241.github.io'
      },
      {
        name: 'og:title',
        content: 'Nicholas Wu'
      },
      {
        name: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'og:url',
        content: 'https://nickwu241.github.io'
      },
      {
        name: 'og:image"',
        content: 'https://nickwu241.github.io/images/profile.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-125077009-1'
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
