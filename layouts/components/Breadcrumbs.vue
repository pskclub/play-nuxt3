<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li
          v-for="(breadcrumb,index) in app.breadcrumbs.value"
          :key="breadcrumb.name + breadcrumb.to"
      >
        <div v-if="index === 0">
          <nuxt-link :to="breadcrumb.to" class="flex items-center text-gray-400 hover:text-gray-500">
            <span class="w-5 h-5" v-html="iconHome"></span>
            <span class="ml-4 text-sm font-medium text-gray-500">{{ breadcrumb.name }}</span>
          </nuxt-link>
        </div>
        <div v-else class="flex items-center">
          <svg
              class="flex-shrink-0 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
          >
            <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
            />
          </svg>
          <span v-if="index === (app.breadcrumbs.value.length - 1)"
                class="ml-4 text-sm font-medium text-gray-500">{{ breadcrumb.name }}</span>
          <nuxt-link v-else :to="breadcrumb.to" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
            {{ breadcrumb.name }}
          </nuxt-link>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
</style>
