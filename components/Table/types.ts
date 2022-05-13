import { IPageOptions } from '~/core/api/types'

export interface IStatus {
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  isLoaded: boolean,
  errorData: any | null,
}

export interface IColumn {
  value: string | any
  title?: string
  className?: string
  props?: object
  enabledSort?: boolean
  isComponent?: boolean
}

export type ColumnType =
  'component'
  | 'boolean'
  | 'input'
  | 'value'
  | 'actions'
  | 'image'
  | 'date'
  | 'link'
  | 'number'
  | 'datetime'

export interface IRowItem<P> {
  value?: any
  type?: ColumnType
  title?: string
  className?: string
  props?: {
    [key: string]: any
  },
  on?: {
    [key: string]: any
  }
}

export interface IRow {
  [index: number]: IRowItem<any>
}

export const columnType: {
  [key in ColumnType]: ColumnType
} = {
  component: 'component',
  boolean: 'boolean',
  input: 'input',
  value: 'value',
  actions: 'actions',
  image: 'image',
  date: 'date',
  datetime: 'datetime',
  link: 'link',
  number: 'number'
}

export interface ITableOptions {
  rawData: any[]
  primary: string
  isHidePagination?: boolean
  isNotChangeRoute: boolean
  status: IStatus
  pageOptions: IPageOptions
  columns: IColumn[]
  rows: IRow[]
  isHideToolbar?: boolean
  onRowClick?: (index: number, columns: { value: string }[]) => void
}

export interface ITableEasyOptions {
  rawData: any[]
  primary: string
  status: IStatus
  columns: IColumn[]
  rows: IRow[]
  onRowClick?: (index: number, columns: { value: string }[]) => void
}
