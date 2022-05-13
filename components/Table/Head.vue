<template>
  <thead class="bg-gray-50">
    <tr>
      <th
        v-for="(column, index) in columns"
        :key="index"
        :class="getTHClassName(column)"
        scope="col"
      >
        <component
          :is="column.value"
          v-if="column.isComponent"
          v-bind="column.props"
        />
        <p v-else v-html="column.value"/>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { IColumn } from './types'

export default defineComponent({
  props: {
    columns: {
      type: Array as () => IColumn[]
    }
  },
  setup (props, context) {
    const getTHClassName = (column: IColumn) => {
      return ['px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider', column.className]
    }
    return { getTHClassName }
  }
})
</script>

<style lang="scss" scoped>
</style>
