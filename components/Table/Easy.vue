<template>
  <div
    :class="[
      'overflow-hidden bg-white shadow-lg rounded-lg  flex flex-col',
      className]
    "
  >
    <table :class="['divide-y divide-gray-200 border',tableClassName]">
      <TableHead :columns="columns"/>
      <TableBody :status="options.status" :rows="rows" :rawData="options.rawData" :primary="options.primary"/>
    </table>
    <TableStatus :status="options.status" :rows="rows"/>
  </div>
</template>

<script lang="ts">
import { columnType, IColumn, IRow, ITableEasyOptions } from './types'

export default defineComponent({
  props: {
    className: {
      type: [String, Object]
    },
    options: {
      type: Object as () => ITableEasyOptions,
      required: true
    }
  },
  setup (props, context) {
    const tableClassName = ['w-full table-auto']

    const columns = computed(() => {
      return props.options.columns
    })

    const rows = computed(() => {
      return props.options.rows
    })

    return {
      tableClassName,
      columnType,
      columns: columns as any as IColumn[],
      rows: rows as any as IRow[]
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
