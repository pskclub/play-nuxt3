<template>
  <div :class="['card',className]" @click="emit('click')">
    <div v-if="slots.header || title" :class="['card-header', headerClassName]">
      <slot v-if="!title" name="header"/>
      <component v-else>
        {{ title }}
      </component>
    </div>
    <div :class="['card-body', bodyClassName]">
      <slot/>
    </div>
    <div v-if="slots.footer" :class="['card-footer', footerClassName]">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from '#imports'

const props = defineProps({
  className: {
    type: [String, Object]
  },
  bodyClassName: {
    type: [String, Object]
  },
  headerClassName: {
    type: [String, Object]
  },
  footerClassName: {
    type: [String, Object]
  },
  title: {
    type: String
  }
})

const slots = useSlots()
const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
</style>
