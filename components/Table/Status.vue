<template>
  <div class="bg-white rounded">
    <Loader :is-loading="status.isLoading"/>
    <Error :message="status.errorData"/>
    <Empty v-if="isEmpty(rows) && status.isSuccess"/>
  </div>
</template>

<script lang="ts">
import { IRow, IStatus } from './types'
import { ArrayHelper } from '~/utils/ArrayHelper'

export default defineComponent({
  props: {
    status: {
      type: Object as () => IStatus,
      required: true
    },
    rows: {
      type: Array as () => IRow[],
      required: true
    }
  },
  setup (props, context) {
    const isEmpty = ArrayHelper.isEmpty
    return { isEmpty }
  }
})
</script>

<style lang="scss" scoped>
</style>
