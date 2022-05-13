<template>
  <div
    v-if="message"
    :class="['flex justify-center items-center flex-col min-h-[250px] text-3xl text-danger-300',className]"
  >
    {{ messageText }}
  </div>
</template>

<script lang="ts">

import { PropType } from '@vue/runtime-core'

export default defineComponent({
  props: {
    message: {
      type: [String, Object, Array] as PropType<any>
    },
    className: {
      type: [String, Object, Array]
    }
  },
  setup (props, context) {
    const messageText = computed(() => {
      if (typeof props.message === 'string') {
        return props.message
      }

      if (props.message?.message) {
        return props.message?.message
      }

      return props.message
    })

    return { messageText }
  }
})
</script>

<style lang="scss" scoped>
</style>
