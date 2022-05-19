<template>
  <button
      :type="type"
      @click="emit('click')"
      :disabled="disabled || isLoading"
      :class="innerClasses"
  >
    <component :is="icon" v-if="icon" class="h-4 w-4 mr-2"/>
    <slot/>
  </button>
</template>

<script lang="ts" setup>
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
    type: Function
  },
  isOnlyIcon: {
    type: Boolean
  }
})

const emit = defineEmits(['click'])

const innerClasses = ['btn', props.className]
</script>

<style lang="scss" scoped>
</style>
