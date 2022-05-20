<template>
  <header class="flex justify-between items-center py-4 px-6 bg-primary shadow-lg">
    <div class="flex items-center">
      <button class="text-white focus:outline-none lg:hidden" @click="setSidebar(true)">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <div class="flex items-center">
      <div class="relative">
        <button
            class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
            @click="dropdownOpen = ! dropdownOpen"
        >
          <span class="text-white" v-html="iconUser"></span>
        </button>

        <div
            v-show="dropdownOpen"
            class="fixed inset-0 h-full w-full z-10"
            style="display: none;"
            @click="dropdownOpen = false"
        />

        <div
            v-show="dropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            style="display: none;"
        >
          <NuxtLink
              to="/logout"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
          >Logout
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { iconUser } from '~/constants/icons'
import { ref } from '#imports'
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
const dropdownOpen = ref(false)
</script>

<style lang="scss" scoped>
</style>
