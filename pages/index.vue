<template>
  <div>
    <Home name="pskclub"/>
    <div class="mt-8">
      <p v-if="video.status.value.isLoading">Loading...</p>
      <button type="button" @click="video.fetch()">update</button>
      <Table/>
    </div>
  </div>
</template>

<script setup>
import Home from '../features/Home'
import { LAYOUTS } from '../constants/layouts'
import { useVideos } from '../hooks/videos'

definePageMeta({
  layout: LAYOUTS.DASHBOARD
})

useHead({
  title: 'hi index'
})

const video = useVideos()

video.fetch()
</script>
