

export default defineNuxtConfig({
  extends: '@nuxt/ui-pro',
  telemetry: false,
  ui: {
    icons: []
  },
  modules: [
    'nuxt-time',
    'nuxt-gtag',
    "@nuxtjs/supabase",
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    '@nuxtjs/fontaine',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    'nuxt-og-image',
    "@nuxt/image"
  ]
})
