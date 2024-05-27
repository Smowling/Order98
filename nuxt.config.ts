// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Order98',
      titleTemplate: '%s'
    }
  },
  $development: {
    app: {
      head: {
        title: 'DEV Order98'
      }
    }
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', "@nuxt/ui", "@formkit/auto-animate"]
})