<template>
  <div
      :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-secondary overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 shadow"
  >
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center">
        <img class="px-10" src="https://credential-validation.finema.dev/logo.png" :alt="CONFIG.TITLE">
      </div>
    </div>

    <nav class="mt-10 flex-1 px-4 pb-4 space-y-1" @click="setSidebar(false)">
      <nuxt-link
          v-for="item in SIDEBAR"
          :key="item.to"
          :class="[
          'text-secondary-text group flex items-center px-4 py-3 text-sm font-medium rounded-md',
          {
            'sidebar-item' : item.to !== '/',
            'sidebar-item-root' : item.to === '/',
          }
        ]"
          :to="item.to"
      >
        <component class="h-6 w-6" :is="item.icon" v-if="item.icon"/>
        <span class="mx-3">{{ item.name }}</span>
      </nuxt-link>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { SIDEBAR } from '~/constants/sidebar'
import { CONFIG } from '~/constants/config'

const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    required: true
  },
  setSidebar: {
    type: Function,
    required: true
  }
})
</script>

<style lang="scss" scoped>
</style>
