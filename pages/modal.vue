<template>
  <div>
    <h1>Modal example</h1>
    <div class="mt-10 space-x-2">
      <Button @click="isOpen = true">
        Open dialog
      </Button>
    </div>
    <Popup v-model="isOpen" title="Hello">
      สวัสดีจ้า
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { LAYOUTS } from '~/constants/layouts'
import { definePageMeta, ref, useHead } from '#imports'

definePageMeta({
  layout: LAYOUTS.DASHBOARD
})

useHead({
  title: 'Modal example'
})

const isOpen = ref<boolean>(false)

</script>

<style lang="scss" scoped>
</style>
