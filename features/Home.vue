<template>
  <div>
    <h1 @click="onClick">Table dds</h1>
    <Table :options="tableOptions" @search="video.search"/>
  </div>
</template>

<script setup lang="ts">
import { useTable } from '~/components/Table/hook'
import { useVideos } from '~/hooks/videos'

const video = useVideos()

const tableOptions = useTable({
  repo: () => video,
  columns: () => [
    {
      value: 'title'
    }
  ],
  rows: () => video.fetchItems.value.map((item) => ([
    {
      value: item.title.default
    }
  ]))
})

</script>
