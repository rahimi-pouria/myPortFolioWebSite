export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/https://rahimi-pouria.github.io/myPortFolioWebSite/'
  },
  build: {
    publicPath: './_nuxt/',
  },
  router: {
    linkActiveClass: 'your-active-link-class',
    linkExactActiveClass: 'your-exact-active-link-class'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/base.scss',
    '~/assets/css/fonts.scss',
    '~/assets/css/Global.scss',
    '~/assets/css/size.scss',
    '~/assets/sass/color.sass'
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
  ]
 })