<template>
  <div>
    my name is {{ props.name }}
    <input v-model="value" type="text" class="border border-black"/>
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate'
import * as yup from 'yup'

const { errorMessage, value } = useField('fieldName', yup.string().required().min(8))
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
