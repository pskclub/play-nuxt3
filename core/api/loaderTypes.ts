import { AxiosRequestConfig, Method } from 'axios'
import { IAPIOptions, IPageOptions, IStatus } from '~/core/api/types'
import { Ref, UnwrapRef } from '@vue/reactivity'

export interface IPageFetchLoaderOptions {
  isMock?: boolean
  params?: {
    [key: string]: any
  }

  data?: { [key: string]: any }
}

export interface IPageFindLoaderOptions {
  isMock?: boolean
  params?: {
    [key: string]: any
  }

  data?: { [key: string]: any }
}

export interface IPageUpdateLoaderOptions {
  isMock?: boolean
  params?: {
    [key: string]: any
  }

  data?: { [key: string]: any }
}

export interface IPageDeleteLoaderOptions {
  isMock?: boolean
  params?: {
    [key: string]: any
  }

  data?: { [key: string]: any }
}

export interface IPageAddLoaderOptions {
  isMock?: boolean
  params?: {
    [key: string]: any
  }
  data?: { [key: string]: any }
}

export interface IPageLoaderOptions<T> {
  store?: {
    vm: any,
    prefix: string
  }
  prefix?: string
  baseURL: string
  primary?: string
  isMock?: boolean
  mockItems?: T[],
  fetch?: {
    getURL?: (page: number, query: string, opts: IPageFetchLoaderOptions) => string
    getRequestOptions?: (page: number, query: string, opts: IPageFetchLoaderOptions) => AxiosRequestConfig
  },
  find?: {
    getURL?: (id: any, opts: IPageFindLoaderOptions) => string
    getRequestOptions?: (id: any, opts: IPageFindLoaderOptions) => AxiosRequestConfig
  },
  update?: {
    getURL?: (id: any, data: any, opts: IPageUpdateLoaderOptions) => string
    getRequestOptions?: (id: any, data: any, opts: IPageUpdateLoaderOptions) => AxiosRequestConfig
  },
  delete?: {
    getURL?: (id: any, opts: IPageDeleteLoaderOptions) => string
    getRequestOptions?: (id: any, opts: IPageDeleteLoaderOptions) => AxiosRequestConfig
  },
  add?: {
    getURL?: (data: any, opts: IPageFetchLoaderOptions) => string
    getRequestOptions?: (data: any, opts: IPageFetchLoaderOptions) => AxiosRequestConfig
  }
}

export interface IObjectLoaderOptions<T> {
  store?: {
    vm: any,
    prefix: string
  }
  prefix?: string
  url: string
  method: Method
  primary?: string
  mockItem?: T,
  getURL?: (data: any, opts: IObjectRunLoaderOptions<T>) => string
  getRequestOptions?: (data: any, opts: IObjectRunLoaderOptions<T>) => AxiosRequestConfig
}

export interface IListLoaderOptions<T> {
  store?: {
    vm: any,
    prefix: string
  }
  prefix?: string
  url: string
  primary?: string
  mockItems?: T[],
  getURL?: (opts: IPageFetchLoaderOptions) => string
  getRequestOptions?: (opts: IPageFetchLoaderOptions) => AxiosRequestConfig
}

export interface IObjectRunLoaderOptions<T> {
  mockItem?: T,
  isMock?: boolean
  params?: {
    [key: string]: any
  }
  data?: { [key: string]: any }
}

export interface IListRunLoaderOptions<T> {
  mockItems?: T[],
  isMock?: boolean
  params?: {
    [key: string]: any
  }
  data?: { [key: string]: any }
}

export interface IUsePageLoader<T> {
  fetchStatus: Ref<UnwrapRef<IStatus>>
  findStatus: Ref<UnwrapRef<IStatus>>
  addStatus: Ref<UnwrapRef<IStatus>>
  updateStatus: Ref<UnwrapRef<IStatus>>
  deleteStatus: Ref<UnwrapRef<IStatus>>
  fetchOptions: Ref<UnwrapRef<IPageOptions>>
  deleteOptions: Ref<UnwrapRef<IPageOptions>>
  addOptions: Ref<UnwrapRef<IPageOptions>>
  findOptions: Ref<UnwrapRef<IPageOptions>>
  updateOptions: Ref<UnwrapRef<IPageOptions>>
  clear: () => void
  fetch: (page?: number, query?: string, opts?: IPageFetchLoaderOptions) => Promise<any>
  search: (query: string, opts?: IPageFetchLoaderOptions) => Promise<any>
  find: (id: string, opts?: any) => Promise<any>
  update: (id: string, data: any, opts?: any) => Promise<any>
  add: (data: any, opts?: IPageAddLoaderOptions) => Promise<any>
  remove: (id: string, opts?: IPageDeleteLoaderOptions) => Promise<any>
  setFetchLoading: () => void
  setFindLoading: () => void
  fetchItems: Ref<UnwrapRef<T[]>>
  findItem: Ref<UnwrapRef<T | null>>
  deleteItem: Ref<UnwrapRef<T | null>>
  addItem: Ref<UnwrapRef<T | null>>
  updateItem: Ref<UnwrapRef<T | null>>
}

export interface IUseObjectLoader<T, B> {
  status: Ref<UnwrapRef<IStatus>>
  data: Ref<UnwrapRef<T | null>>
  options: Ref<UnwrapRef<IAPIOptions>>
  run: (data: B, opts?: IObjectRunLoaderOptions<T>) => Promise<any>
  clear: () => void
  setLoading: () => void
  setData: (data: T | null) => void
}

export interface IUseListLoader<T> {
  status: Ref<UnwrapRef<IStatus>>
  items: Ref<UnwrapRef<T[]>>
  options: Ref<UnwrapRef<IAPIOptions>>
  run: (data: any, opts?: IListRunLoaderOptions<T>) => void
  clear: () => void
  setLoading: () => void
}
