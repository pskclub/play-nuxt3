<template>
  <div :class="['flex items-center']">
    <div
      v-if="!view.isHideEdit"
      data-testid="action-edit"
      class="p-2 mr-2 cursor-pointer"
      title="Edit"
      @click="$emit('edit')"
    >
      <i class="fas fa-edit text-warning"/>
    </div>
    <div
      v-if="!view.isHideDelete"
      data-testid="action-delete"
      class="p-2 mr-2 cursor-pointer"
      title="Delete"
    >
      <i
        :class="(view.deleteStatus && view.deleteStatus.isLoading) ? 'fas fa-spinner text-primary' : 'fas fa-trash text-danger'"
        @click="onDelete"
      />
    </div>
    <nuxt-link
      v-if="view.isShowView"
      class="p-2 mr-2 cursor-pointer"
      title="View"
      :to="view.to"
    >
      <i class="fas fa-eye text-info"/>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { IRowItem, IStatus } from './types'
import { IDialogDeleteOptions, useDialog } from '../Dialog/dialog'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<IRowItem<{
        isHideEdit?: boolean,
        isShowView?: boolean,
        isHideDelete?: boolean,
        deleteDialogOptions?: IDialogDeleteOptions
        deleteStatus?: IStatus
      }>>,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  setup ({
    item,
    options,
    data
  }, { emit }) {
    const dialog = useDialog()
    const onDelete = () => {
      dialog.delete({
        description: item.props?.deleteDialogOptions?.description,
        title: item.props?.deleteDialogOptions?.title,
        confirmText: item.props?.deleteDialogOptions?.confirmText
      }).then(() => {
        emit('delete', data)
      })
    }

    const view = computed(() => item.props || {})
    return {
      onDelete,
      view
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
