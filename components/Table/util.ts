import { IColumn, IRow, IStatus, ITableOptions } from '~/components/Table/types'
import { CONFIG } from '~/constants/config'

// export const createTableOptions = (repo: IUsePageLoader<any>, columns: IColumn[], rows: IRow[], options: any | ITableOptions = {}): ITableOptions => {
export const createTableOptions = (repo: any, columns: IColumn[], rows: IRow[], options: any | ITableOptions = {}): ITableOptions => {
  return {
    rawData: repo.fetch.items,
    pageOptions: repo.fetch.options,
    columns,
    rows,
    status: repo.fetch.status,
    deleteStatus: repo.fetch.status,
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
      loading: false,
      isError: false,
      isSuccess: true,
      errorData: null
    },
    primary: CONFIG.DEFAULT_PRIMARY,
    ...options
  }
}
