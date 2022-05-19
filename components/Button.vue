<template>
  <nuxt-link
      v-if="type === 'link'"
      :title="title"
      :to="href"
      :disabled="disabled || isLoading"
      :class="innerClasses"
  >
    <svg v-if="isLoading"
         :class="['h-5 w-5 animate-spin',{'mr-2': !!slots.default}]" xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <component :is="icon" v-if="icon && !isLoading" :class="['h-5 w-5',{'mr-2' : !!slots.default}]"/>
    <slot/>
  </nuxt-link>
  <button
      v-else
      :type="type"
      :title="title"
      @click="emit('click')"
      :disabled="disabled || isLoading"
      :class="innerClasses"
  >
    <svg v-if="isLoading"
         :class="['h-5 w-5 animate-spin',{'mr-2': !!slots.default}]" xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <component :is="icon" v-if="icon && !isLoading" :class="['h-5 w-5',{'mr-2' : !!slots.default}]"/>
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
  }
})

const emit = defineEmits(['click'])
const slots = useSlots()
const innerClasses = ['btn', props.className]

</script>

<style lang="scss" scoped>
</style>
