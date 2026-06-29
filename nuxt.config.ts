import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  appManifest: false,
  vite: {
    plugins: [tailwindcss() as any],
  },
  ssr: true,
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/icon'],
  fonts: {
    families: [
      { name: 'Poppins', weights: [400, 700] },
      { name: 'Roboto Slab', weights: [400, 700] },
      { name: 'Rufina', weights: [400, 700] },
      { name: 'Roboto Mono', weights: [400, 700] },
    ]
  }
})