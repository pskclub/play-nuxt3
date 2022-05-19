<template>
  <div class="grid grid-cols-3 gap-4">
    <Card title="Card">
      content
    </Card>
    <Card title="Card">
      content
      <template #footer>
        footer content
      </template>
    </Card>
    <Card>
      content
    </Card>
  </div>
</template>

<script setup lang="ts">
import { LAYOUTS } from '~/constants/layouts'
import { definePageMeta, useHead } from '#imports'

definePageMeta({
  layout: LAYOUTS.DASHBOARD
})

useHead({
  title: 'Card example'
})
</script>

<style lang="scss" scoped>
</style>
