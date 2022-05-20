import { defineStore } from 'pinia'
import { SIDEBAR } from '~/constants/sidebar'
import { ref, useHead } from '#imports'
import { CONFIG } from '~/constants/config'
import { IDocMeta, IPageMeta } from '~/store/app.types'

export const useApp = defineStore('app', () => {
  const page = ref<IPageMeta>({
    title: CONFIG.TITLE,
    sub_title: '',
    breadcrumbs: []
  })

  const doc = ref<IDocMeta>({
    title: CONFIG.TITLE
  })

  const sidebar = ref(SIDEBAR)

  const updatePage = (data: IPageMeta) => {
    page.value = data
  }

  const updateDoc = (data: IDocMeta) => {
    doc.value = data
    useHead({
      title: data.title
    })
  }

  return {
    page,
    doc,
    sidebar,
    updatePage,
    updateDoc
  }
})
