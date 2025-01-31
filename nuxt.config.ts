// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-icon'  // for the icons
  ],
  // Optional: Add custom colors to match your brand
  ui: {
    primary: 'amber'
  }
})
