<template>
  <div class="dialog-wrapper">
    <div
      class="inline-block align-bottom w-full rounded-lg text-left overflow-hidden sm:align-middle"
    >
      <div>
        <div
          :class="[
            'mx-auto flex items-center justify-center h-12 w-12 rounded-full',
            {
              'bg-warning-100 text-warning' : options.type==='warning',
              'bg-danger-100 text-danger' : options.type==='danger',
              'bg-info-100 text-info' : options.type==='info',
              'bg-success-100 text-success' : options.type==='success',
            }
          ]"
          v-html="icons[options.type]"
        />
        <div class="mt-3 text-center sm:mt-5">
          <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
            {{ options.title }}
          </h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              {{ options.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-6 flex justify-center">
        <Button
          :className="['min-w-[120px] sm:w-auto mt-3 sm:mt-0',`btn-${options.type}`]"
          @click="handleProceed"
        >
          {{ options.confirmText || 'ตกลง' }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default defineComponent({
  props: {
    options: {
      type: Object as () => any,
      required: true
    }
  },
  setup (props, { emit }) {
    const icons = {
      danger: `  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" ar.,m  .ia-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>`,
      success: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
      info: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
</svg>`,
      warning: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>`
    }

    const handleDismiss = () => {
      emit('close')
    }

    const handleProceed = () => {
      emit('proceed', true)
    }

    return {
      handleDismiss,
      handleProceed,
      icons
    }
  }
})
</script>
