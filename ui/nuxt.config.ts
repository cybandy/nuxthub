// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthub/core", "@nuxt/ui"],
  hub: {
    database: true,
  },
  ui: {
    global: true,
  }
})