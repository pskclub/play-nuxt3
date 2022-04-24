// @ts-nocheck
import { createLocalVue } from '@vue/test-utils'
import DisplayError from '~/components/form/DisplayError.vue'
import DisplayIsRequired from '~/components/form/DisplayIsRequired.vue'
import InputWrapper from '~/components/form/InputWrapper.vue'
import Label from '~/components/form/Label.vue'
import Vuex from 'vuex'

export const getLocalVue = () => {
  const localVue = createLocalVue()
  localVue.component('FormInputWrapper', InputWrapper)
  localVue.component('FormLabel', Label)
  localVue.component('FormDisplayError', DisplayError)
  localVue.component('FormDisplayIsRequired', DisplayIsRequired)
  localVue.component('FormDisplayIsRequired', DisplayIsRequired)
  localVue.use(Vuex)
  return localVue
}
