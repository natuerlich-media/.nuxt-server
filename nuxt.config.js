export default {
  target: 'server',
  head: {
    title: 'nuxt-server-boilerplate',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/image'
  ],

  axios: {
    baseURL: '/'
  },

  build: {
    optimizeCSS: true,
    html: {
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      removeEmptyElements: true,
      minify: true
    },
    cssSourceMap: true,
    optimization: {
      removeEmptyChunks: true
    },
    splitChunks: true
  }
}
