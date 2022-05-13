<template>
  <IMG className="inline-block max-h-14 w-14 rounded-md" :src="item.value" :title="item.title"/>
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
