import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/main.scss'
  ],
  modules: ['@nuxtjs/tailwindcss', 'cookie-universal-nuxt']
})
