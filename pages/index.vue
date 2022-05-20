<template>
  <div>
    <Table :options="tableOptions" @search="video.search"/>
  </div>
</template>

<script setup lang="ts">
import { LAYOUTS } from '~/constants/layouts'
import { definePageMeta, useAsyncData, useHead } from '#imports'
import { useTable } from '~/components/Table/hook'
import { useVideos } from '~/hooks/videos'

definePageMeta({
  layout: LAYOUTS.DASHBOARD
})

useHead({
  title: 'hi index'
})
const video = useVideos()

useAsyncData('videos', () => video.get(), { server: false })

const tableOptions = useTable({
  repo: () => video,
  columns: () => [
    {
      value: 'title'
    }
  ],
  rows: () => video.fetch.items.map((item) => ([
    {
      value: item.title.default
    }
  ]))
})


</script>
