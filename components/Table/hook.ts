import { IColumn, IRow, IStatus, ITableEasyOptions, ITableOptions } from '~/components/Table/types'
import { createTableEasyOptions, createTableOptions } from '~/components/Table/util'
import { IUsePageLoader } from '~/core/api/loaderTypes'
import { ComputedRef, Ref } from '@vue/reactivity'
import { computed } from '#imports'

export const useTable = (options: { repo: () => IUsePageLoader<any> | any, columns: () => IColumn[], rows: () => IRow[], options?: any | ITableOptions }): Ref<ITableOptions> => {
  return computed(() => {
    return createTableOptions(options.repo(), options.columns(), options.rows(), options.options)
  })
}

export const useTableEasy = (options: { items: () => any[], status?: () => IStatus, columns: () => IColumn[], rows: () => IRow[], options?: any | ITableEasyOptions }): ComputedRef<ITableEasyOptions> => {
  return computed(() => {
    return createTableEasyOptions(options.items(), options.status?.() || null, options.columns(), options.rows(), options.options)
  })
}
