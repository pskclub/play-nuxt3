<template>
  <div class="space-x-3">
    <Button>
      Click Me!
    </Button>
    <Button class-name="btn-secondary">
      Click Me!
    </Button>
    <Button class-name="btn-info">
      Click Me!
    </Button>
    <Button class-name="btn-success">
      Click Me!
    </Button>
    <Button class-name="btn-danger">
      Click Me!
    </Button>
    <Button class-name="btn-warning">
      Click Me!
    </Button>
  </div>
  <div class="space-x-3 mt-4">
    <Button disabled>
      Click Me!
    </Button>
    <Button class-name="btn-secondary" disabled>
      Click Me!
    </Button>
    <Button class-name="btn-info" disabled>
      Click Me!
    </Button>
    <Button class-name="btn-success" disabled>
      Click Me!
    </Button>
    <Button class-name="btn-danger" disabled>
      Click Me!
    </Button>
    <Button class-name="btn-warning" disabled>
      Click Me!
    </Button>
  </div>

  <div class="space-x-3 mt-4">
    <Button :icon="icon">
      Click Me!
    </Button>
    <Button class-name="btn-secondary">
      Click Me!
    </Button>
    <Button class-name="btn-info">
      Click Me!
    </Button>
    <Button class-name="btn-success">
      Click Me!
    </Button>
    <Button class-name="btn-danger">
      Click Me!
    </Button>
    <Button class-name="btn-warning">
      Click Me!
    </Button>
  </div>
</template>

<script setup lang="ts">
import { LAYOUTS } from '~/constants/layouts'
import { definePageMeta, ref, useHead } from '#imports'
import { HomeIcon } from '@heroicons/vue/solid'

definePageMeta({
  layout: LAYOUTS.DASHBOARD
})

useHead({
  title: 'Button example'
})

const icon = HomeIcon
</script>

<style lang="scss" scoped>
</style>
