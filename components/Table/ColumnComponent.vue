<template>
  <components
    :is="item.value"
    :data="data"
    v-bind="item.props"
    v-on="item.on"
  />
</template>

<script lang="ts">
import { IRowItem } from './types'

export default defineComponent({
  props: {
    item: {
      required: true,
      type: Object as () => IRowItem<any>
    }
  },
  setup (props, context) {
    return {}
  }
})
</script>

<style lang="scss" scoped>
</style>
