<template>
  <tbody v-if="status.isSuccess && !status.isLoading" class="divide-y divide-gray-200">
    <tr
      v-for="(_columns, indexRow) in rows"
      :key="getRowKey(indexRow)"
      :class="getTRRowClassName(indexRow)"
    >
      <td
        v-for="(item, index) in _columns"
        :key="getRowKey(indexRow,index)"
        :class="getTDClassName(indexRow,item)"
      >
        <TableColumnText
          v-if="item.type === columnType.value || !item.type"
          :item="item"
        />
        <TableColumnNumber
          v-if="item.type === columnType.number"
          :item="item"
        />
        <TableColumnLink
          v-if="item.type === columnType.link"
          :item="item"
        />
        <TableColumnImage
          v-if="item.type === columnType.image"
          :item="item"
        />
        <TableColumnDatetime
          v-if="item.type === columnType.datetime"
          :item="item"
        />
        <TableColumnComponent
          v-if="item.type === columnType.component"
          :item="item"
          :data="rawData[indexRow]"
          v-on="item.on"
        />
        <TableColumnAction
          v-if="item.type === columnType.actions"
          :item="item"
          :data="rawData[indexRow]"
          v-on="item.on"
        />
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { columnType, IRow, IRowItem, IStatus } from './types'
import { _get } from '~/utils/lodash'

export default defineComponent({
  props: {
    status: {
      type: Object as () => IStatus,
      required: true
    },
    rows: {
      type: Array as () => IRow[],
      required: true
    },
    rawData: {
      type: Array as () => any[],
      required: true
    },
    primary: {
      type: String,
      required: true
    }
  },
  setup (props, context) {
    const getTDClassName = (rowIndex: number, item: IRowItem<any>) => {
      const row = getRowKey(rowIndex)
      return ['px-5 py-5 border-b border-gray-200 text-sm', item.className]
    }

    const getTRRowClassName = (rowIndex: number) => {
      return ['hover:bg-gray-100']
    }

    const getRowKey = (rowIndex: number, index: number = 0) => {
      return _get(
        props.rawData,
        `[${rowIndex}][${props.primary}]`,
        'child' + rowIndex
      ) + index
    }
    return {
      getTDClassName,
      getTRRowClassName,
      getRowKey,
      columnType
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
