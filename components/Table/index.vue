<template>
  <div
      :class="[
      'overflow-hidden bg-white shadow-lg rounded-lg  flex flex-col',
      className]
    "
  >
    <slot v-if="!options.isHideToolbar" name="toolbar">
      <div class="grid p-4 gap-2 md:grid-cols-3 sm:grid-cols-1">
        <div
            class="shadow flex border focus-within:border-2 rounded-md pl-2 border-gray-300 focus-within:ring-primary focus-within:border-primary"
        >
          <input
              ref="searchInput"
              v-model="search"
              class="w-full appearance-none focus:outline-none rounded-l p-2 border-0 focus:ring-0 placeholder-gray-400"
              type="text"
              placeholder="Search...xx"
              @input="debounceSearch"
          >
          <button
              class="w-auto flex justify-end items-center text-gray-400 p-2 hover:text-gray-600"
              @click="debounceSearch"
          >
            <span class="w-6 h-6" v-html="iconSearch"/>
          </button>
        </div>
        <div class="toolbar-secondary md:col-span-2">
          <slot name="toolbar-secondary"/>
        </div>
      </div>
    </slot>
    <div class="overflow-auto">
      <table :class="['divide-y divide-gray-200 border',tableClassName]">
        <TableHead :columns="columns"/>
        <TableBody :status="options.status" :rows="rows" :rawData="options.rawData" :primary="options.primary"/>
      </table>
      <TableStatus :status="options.status" :rows="rows"/>
    </div>
    <div
        v-if="!options.isHidePagination && options.pageOptions.totalCount"
        class="flex flex-col md:flex-row md:justify-between p-4 items-center"
    >
      <p class="font-size-sm text-center text-md-left md:mb-0 mb-5 text-sm text-gray-700">
        Showing {{ pageBetween }} from {{ totalCountWithComma }} items
      </p>
      <div class="flex justify-center overflow-auto">
<!--        <Pagination-->
<!--            :current-page="options.pageOptions.currentPage"-->
<!--            :limit-per-page="options.pageOptions.limit"-->
<!--            :onPageChange="onPageChange"-->
<!--            :total-count="options.pageOptions.totalCount"-->
<!--        />-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITableOptions } from './types'
import { _debounce, _get } from '~/utils/lodash'
import { StringHelper } from '~/utils/StringHelper'
import Pagination from './Pagination.vue'
import { iconSearch } from '~/constants/icons'
import { useRoute, useRouter } from '#app'
import { ref } from '#imports'
import { PropType } from '@vue/runtime-core'

const props = defineProps({
  className: {
    type: [String, Object]
  },
  options: {
    type: Object as PropType<ITableOptions>,
    required: true
  }
})

const emit = defineEmits(['search', 'pageChange'])

const router = useRouter()
const route = useRoute()
const search = ref<string>('')

search.value = props.options.pageOptions.search || ''

const debounceSearch = () => {
  console.log('xxx')
  if (!props.options.isNotChangeRoute) {
    router.push({
      path: `${route.path}`,
      query: {
        ...(route.query || {}),
        page: 1
      }
    })
  }

  emit('search', search.value)
}

const tableClassName = ['w-full table-auto']

const columns = computed(() => {
  return props.options.columns
})

const rows = computed(() => {
  return props.options.rows
})

const getRowKey = (rowIndex: number) => {
  return _get(
      props.options,
      `rawData[${rowIndex}][${props.options.primary}]`,
      'child' + rowIndex
  )
}

const pageBetween = computed((): string => {
  const length = props.options.rows.length
  if (length === 0) {
    return '0'
  }

  let currentPage = `${length * props.options.pageOptions.currentPage -
  (props.options.pageOptions.limit - 1)} - ${length * props.options.pageOptions.currentPage}`
  if (length / props.options.pageOptions.limit !== 1) {
    currentPage = `${props.options.pageOptions.totalCount - length + 1} - ${
        props.options.pageOptions.totalCount
    }`
  }
  return currentPage
})

const totalCountWithComma = computed(() => {
  if (!props.options.pageOptions.totalCount) {
    return '0'
  }
  return StringHelper.withComma(props.options.pageOptions.totalCount)
})

const onPageChange = (page: number) => {
  if (!props.options.isNotChangeRoute) {
    router.push({
      path: `${route.path}`,
      query: {
        ...(route.query || {}),
        page: page
      }
    })
  }
  emit('pageChange', page, search.value)
}

const onSearchClear = () => {
  search.value = ''
  emit('search', '')
}
</script>
