import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: [
    '@/assets/main.scss'
  ],
  modules: ['@nuxtjs/tailwindcss', 'cookie-universal-nuxt'],
  buildModules: [
    '@pinia/nuxt'
  ],
  types: [
    '@pinia/nuxt'
  ],
  build: {
    transpile: ['@heroicons/vue']
  },
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: [
        '@headlessui/vue', '@heroicons/vue/solid', '@heroicons/vue/outline', 'vue', 'pinia', 'ufo'
      ]
    }
  }
  // vite: {
  //   ssr: {
  //     noExternal: ['lodash']
  //   }
  // }
})
