<template>
  <div
    :class="['flex justify-center items-center flex-col min-h-[250px] text-4xl text-gray-400',className]">
    <p>{{ text }}</p>
    <slot></slot>
  </div>

</template>

<script lang="ts">

export default defineComponent({
  props: {
    text: {
      type: String,
      default: 'Empty data'
    },
    className: {
      type: [String, Object, Array]
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
</style>
