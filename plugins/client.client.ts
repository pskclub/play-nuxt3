import VuejsDialog from 'vuejs-dialog'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VuejsDialog.main.default)
})
