<template>
  <span :title="item.title || item.value">{{ getValue }}</span>
</template>

<script lang="ts">
import { IRowItem } from './types'
import { TimeHelper } from '../../utils/TimeHelper'

export default defineComponent({
  props: {
    item: {
      required: true,
      type: Object as () => IRowItem<{ max?: number }>
    }
  },
  setup ({ item }, context) {
    const getValue = computed(() => {
      return TimeHelper.getDateTimeFormTime(item.value)
    })
    return { getValue }
  }
})
</script>

<style lang="scss" scoped>
</style>
