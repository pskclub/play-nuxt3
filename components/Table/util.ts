import { IColumn, IRow, IStatus, ITableOptions } from '~/components/Table/types'
import { get } from '@vueuse/core'
import { IUsePageLoader } from '~/core/api/loaderTypes'
import { CONFIG } from '~/constants/config'

export const createTableOptions = (repo: IUsePageLoader<any>, columns: IColumn[], rows: IRow[], options: any | ITableOptions = {}): ITableOptions => {
  return {
    rawData: repo.fetchItems.value,
    pageOptions: repo.fetchOptions.value,
    columns,
    rows,
    status: repo.fetchStatus.value,
    deleteStatus: repo.fetchStatus.value,
    primary: CONFIG.DEFAULT_PRIMARY,
    isNotChangeRoute: false,
    ...options
  }
}

export const createTableEasyOptions = (items: any[], status: IStatus | null, columns: IColumn[], rows: IRow[], options: any | ITableOptions = {}): ITableOptions => {
  return {
    rawData: items,
    columns,
    rows,
    status: status || {
      isLoaded: true,
      isLoading: false,
      isError: false,
      isSuccess: true,
      errorData: null
    },
    primary: CONFIG.DEFAULT_PRIMARY,
    ...options
  }
}
