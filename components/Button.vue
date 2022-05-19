<template>
  <button
      :type="type"
      @click="emit('click')"
      :disabled="disabled || isLoading"
      :class="innerClasses"
  >
    <component :is="icon" v-if="icon" :class="['h-4 w-4',{'mr-2' : !!slots.default}]"/>
    <slot/>
  </button>
</template>

<script lang="ts" setup>
import { ComponentInstance } from '@vue/devtools-api'
import { useSlots } from '#imports'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
    validator (val: string) {
      return ['button', 'submit', 'link'].includes(val)
    }
  },
  className: {
    type: [String, Object, Array],
    default: 'btn-primary'
  },
  href: {
    type: String
  },
  title: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  isLoading: {
    type: Boolean
  },
  icon: {
    type: [Function as ComponentInstance, String]
  },
  isOnlyIcon: {
    type: Boolean
  }
})

const emit = defineEmits(['click'])
const slots = useSlots()
const innerClasses = ['btn', props.className]
</script>

<style lang="scss" scoped>
</style>
