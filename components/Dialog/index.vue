<template>
  <Fragment>
    <InfoDialog v-if="isInfoDialog" :options="options" @close="cancel" @proceed="proceed"/>
    <ActionConfirmDialog v-else-if="isConfirmDialog" :options="options" @close="cancel" @proceed="proceed"/>
  </Fragment>
</template>

<script lang="ts">
import InfoDialog from './InfoDialog.vue'
import ActionConfirmDialog from '~/components/Dialog/ConfirmDialog.vue'

export default defineComponent({
  components: {
    InfoDialog,
    ActionConfirmDialog
  },
  props: {
    options: {
      type: Object as () => any,
      required: true
    }
  },
  setup ({ options }: any, { emit }) {
    const isInfoDialog = options._type === 'info'
    const isConfirmDialog = options._type === 'confirm'
    const loading = ref<boolean>(false)
    const loaderEnabled = computed(() => {
      return !!options.loader
    })

    const close = () => {
      emit('close')
    }

    const switchLoadingState = (_loading: any = null) => {
      if (_loading === null) {
        _loading = !loading.value
      }

      loading.value = !!_loading
    }
    const proceed = (withData: any = null) => {
      if (loaderEnabled.value) {
        switchLoadingState(true)
        options.promiseResolver({
          close: close,
          loading: switchLoadingState,
          data: withData
        })
      } else {
        options.promiseResolver({
          data: withData
        })
        close()
      }
    }

    const cancel = () => {
      if (loading.value) { return }
      close()
    }

    return {
      isInfoDialog,
      isConfirmDialog,
      proceed,
      cancel
    }
  }
})
</script>
