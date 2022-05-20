<template>
  <div>
    <div class="space-x-3">
      <Button v-for="color in btnColors" :key="color" :class-name="color">
        Click Me!
      </Button>
    </div>
    <div class="space-x-3 mt-4">
      <Button v-for="color in btnColors" :key="color" :class-name="color" disabled>
        Click Me!
      </Button>
    </div>

    <div class="space-x-3 mt-4">
      <Button v-for="color in btnColors" :key="color" :class-name="color" :icon="icon">
        Click Me!
      </Button>
    </div>

    <div class="space-x-3 mt-4">
      <Button v-for="color in btnColors" :key="color" :class-name="color" :icon="icon">
      </Button>

    </div>
    <div class="space-x-3 mt-4">
      <Button v-for="color in btnColors" :key="color" :class-name="color" loading>
        Click Me!
      </Button>
    </div>
    <div class="space-x-3 mt-4">
      <Button type="link" href="https://github.com/" v-for="color in btnColors" :key="color" :class-name="color">
        Go to
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LAYOUTS } from '~/constants/layouts'
import { definePageMeta } from '#imports'
import { HomeIcon } from '@heroicons/vue/solid'
import { useApp } from '~/store/app'

definePageMeta({
  layout: LAYOUTS.DASHBOARD
})

const app = useApp()
app.updatePage({
  title: 'Button example'
})
app.updateDoc({
  title: 'Button example doc'
})

const icon = HomeIcon
const btnColors = ['btn-primary', 'btn-secondary', 'btn-info', 'btn-success', 'btn-danger', 'btn-warning']
</script>

<style lang="scss" scoped>
</style>
