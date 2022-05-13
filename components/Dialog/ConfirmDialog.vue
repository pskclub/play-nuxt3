<template>
  <div class="dialog-wrapper">
    <div class="hidden sm:block absolute top-0 right-0">
      <button
        type="button"
        class="bg-white pt-4 pr-4 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
        @click="handleDismiss"
      >
        <span class="sr-only">Close</span>
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="sm:flex sm:items-start">
      <div
        :class="[
          'mx-auto flex-shrink-0 flex items-center justify-center p-2 h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10',
          {
            'bg-warning-100 text-warning' : options.type==='warning',
            'bg-danger-100 text-danger' : options.type==='danger',
            'bg-info-100 text-info' : options.type==='info',
            'bg-success-100 text-success' : options.type==='success',
          }]"
        v-html="icons[options.type]"
      />
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ options.title }}
        </h3>
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            {{ options.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-4 sm:flex sm:justify-end">
      <Button :class-name="['min-w-[100px] w-full sm:w-auto sm:mr-3',`btn-${options.type}`]" @click="handleProceed">
        {{ options.confirmText || 'Confirm' }}
      </Button>
      <Button
        :className="['min-w-[100px] w-full sm:w-auto mt-3 sm:mt-0']"
        @click="handleDismiss"
      >
        {{ options.cancelText === 'Close' ? 'Cancel' : options.cancelText || 'Cancel' }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { iconCheck, iconInfo, iconWarning } from '~/constants/icons'

export default defineComponent({
  props: {
    options: {
      type: Object as () => any,
      required: true
    }
  },
  setup (props, { emit }) {
    const icons = {
      danger: iconWarning,
      success: iconCheck,
      info: iconInfo,
      warning: iconWarning
    }

    const handleDismiss = () => {
      emit('close')
    }

    const handleProceed = () => {
      emit('proceed', null)
    }

    return {
      handleDismiss,
      handleProceed,
      icons
    }
  }
})
</script>
