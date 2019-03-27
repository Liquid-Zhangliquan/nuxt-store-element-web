module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'xx公司官网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'xx公司官网' },
      { hid: 'keywords', name: 'keywords', content: '外业测量，产品研发，GIS解决方案，数据可视化，AI出图' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    { src: 'element-ui/lib/theme-chalk/index.css' },
    '~/assets/sass/app.scss'

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~plugins/element-ui', ssr: true }],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true
  },
  /*
  ** Proxy
  */
  proxy: {
    '/api/': {
      target: 'http://localhost:8081',// 后台api主机
      headers: { 'X-Forwarded-Host': 'localhost:8005' },//web主机
      pathRewrite: { '^/api': '/' }
    }
  },
  /*
  ** Server configuration
  */
  server: {
    port: 8005, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) { //* Run ESLint on save
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}
