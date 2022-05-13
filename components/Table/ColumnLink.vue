<template>
  <Fragment>
    <a
      v-if="item.props.to.startsWith('http')"
      :target="item.props.target"
      :href="item.props.to"
      :title="item.title || item.value"
    >
      {{ getValue || '-' }}
    </a>
    <nuxt-link v-else :target="item.props.target" :to="item.props.to" :title="item.title || item.value">
      {{ getValue || '-' }}
    </nuxt-link>
  </Fragment>
</template>

<script lang="ts">
import { IRowItem } from './types'
import { StringHelper } from '../../utils/StringHelper'

export default defineComponent({
  props: {
    item: {
      required: true,
      type: Object as () => IRowItem<{ to: string, target: string, max?: number }>
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
