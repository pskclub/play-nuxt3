<template>
  <div v-if="getIsLoading" :class="['flex justify-center items-center h-[300px]',className]">
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"/>
  </div>
  <slot v-else/>
</template>

<script lang="ts">
import { _isUndefined } from '~/utils/lodash'

export default defineComponent({
  props: {
    isLoading: {
      type: Boolean
    },
    className: {
      type: [String, Object]
    }
  },
  setup (props, context) {
    const getIsLoading = computed(() => {
      return _isUndefined(props.isLoading) ? true : props.isLoading
    })

    return {
      getIsLoading
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
