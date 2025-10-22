// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon"],
  css: ["@/assets/scss/main.scss"],
  typescript: {
    strict: true,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    rootId: "app",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/variables";
            @import "@/assets/scss/mixins";
          `,
        },
      },
    },
  },
});
