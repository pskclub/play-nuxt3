<template>
  <span :title="item.title || item.value" v-html="getValue"/>
</template>

<script lang="ts">
import { IRowItem } from './types'
import { StringHelper } from '~/utils/StringHelper'
import { computed, defineComponent } from '#imports'

export default defineComponent({
  props: {
    item: {
      required: true,
      type: Object as () => IRowItem<{ max?: number }>
    }
  },
  setup ({ item }, context) {
    const getValue = computed(() => {
      return StringHelper.withComma(item.value) || '-'
    })
    return { getValue }
  }
})
</script>

<style lang="scss" scoped>
</style>
