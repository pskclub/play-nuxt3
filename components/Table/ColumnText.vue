<template>
  <span :title="item.title || item.value" v-html="getValue || '-'"/>
</template>

<script lang="ts">
import { IRowItem } from './types'
import { StringHelper } from '../../utils/StringHelper'

export default defineComponent({
  props: {
    item: {
      required: true,
      type: Object as () => IRowItem<{ max?: number }>
    }
  },
  setup ({ item }, context) {
    const getValue = computed(() => {
      return item.props?.max ? StringHelper.truncate(item.value, item.props?.max) : item.value
    })
    return { getValue }
  }
})
</script>

<style lang="scss" scoped>
</style>
