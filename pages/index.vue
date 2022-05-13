<template>
  <Home/>
</template>

<script setup lang="ts">
import Home from '~/features/Home.vue'
import { LAYOUTS } from '~/constants/layouts'
import { useVideos } from '~/hooks/videos'
import { definePageMeta, useAsyncData, useHead } from '#imports'

definePageMeta({
  layout: LAYOUTS.DASHBOARD
})

useHead({
  title: 'hi index'
})
const video = useVideos()
useAsyncData('videos', () => video.fetch(), { server: false })
</script>
