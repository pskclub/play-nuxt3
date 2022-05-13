<template>
  <b-pagination
    v-if="totalCount"
    v-model="page"
    :limit="10"
    :per-page="limitPerPage"
    :total-rows="totalCount"
    @change="onPageChange"
  />
</template>

<script lang="ts">
import { CONFIG } from '../../constants/config'

export default defineComponent({
  props: {
    totalCount: Number,
    limitPerPage: {
      type: Number,
      default: CONFIG.LIMIT_PER_PAGE
    },
    currentPage: {
      type: Number,
      default: 1
    },
    onPageChange: Function
  },
  setup (props, context) {
    const page = ref<number>(props.currentPage)
    watch(() => props.currentPage, (value) => {
      page.value = value
    })
    return { page }
  }
})
</script>

<style lang="scss" scoped>
</style>
