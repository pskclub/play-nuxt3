import {
  IAPIAddState,
  IAPIDeleteState,
  IAPIFetchState,
  IAPIFindState,
  IAPIUpdateState,
  IPageOptions,
  IStatus
} from '~/core/api/types'
import { ObjectHelper } from '~/utils/ObjectHelper'
import { NewRequester } from '~/core/Requester'
import { _findIndex, _get, _shuffle } from '~/utils/lodash'
import {
  IPageDeleteLoaderOptions,
  IPageFetchLoaderOptions,
  IPageFindLoaderOptions,
  IPageLoaderOptions,
  IPageUpdateLoaderOptions
} from '~/core/api/loaderTypes'
import { CONFIG } from '~/constants/config'
import { getParams } from '~/core/api/utils'

export const apiAddHelper = async (
  state: () => IAPIAddState<any>,
  onUpdateStatus: (status: IStatus) => void,
  onUpdateOptions: (options: { [key: string]: any }) => void,
  onUpdateData: (data: any) => void,
  onUpdateItems: (data: any[]) => void,
  data: any,
  opts: IPageLoaderOptions<any> & IPageFetchLoaderOptions
) => {
  onUpdateStatus(ObjectHelper.toLoadingStatus(state().status))
  onUpdateOptions({})
  try {
    let item = null
    if (opts.isMock) {
      const res: any = {
        data: opts.mockItems![0]
      }

      onUpdateData(res.data)
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status))
    } else {
      const reqOptions = opts.add?.getRequestOptions?.(data, opts) ?? {}
      reqOptions.params = getParams(opts, reqOptions)
      const {
        data: itemm,
        status
      } = await NewRequester.post<any>(opts.add?.getURL ? opts.add.getURL(data, opts) : opts.baseURL, data, reqOptions)
      onUpdateData(itemm)
      item = itemm
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status))
      onUpdateOptions({
        _status: status
      })
    }
    if (state().items) {
      onUpdateItems([item!, ...state().items!])
    }
  } catch (e) {
    onUpdateStatus(ObjectHelper.toErrorStatus(state().status, e))
    onUpdateOptions({
      _status: e.response?.status
    })
  }

  onUpdateStatus(ObjectHelper.toCompleteStatus(state().status))
}

export const apiDeleteHelper = async (
  state: () => IAPIDeleteState<any>,
  onUpdateStatus: (status: IStatus) => void,
  onUpdateOptions: (options: { [key: string]: any }) => void,
  onUpdateData: (data: any) => void,
  onUpdateItems: (data: any[]) => void,
  id: any,
  opts: IPageLoaderOptions<any> & IPageDeleteLoaderOptions
) => {
  const primaryKey = opts.primary ?? 'id'
  const getPrimaryKey = (item: any): string => _get(item, primaryKey, '')
  onUpdateStatus(ObjectHelper.toLoadingStatus(state().status))
  onUpdateOptions({})
  try {
    if (opts.isMock) {
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status))
    } else {
      const reqOptions = opts.delete?.getRequestOptions?.(id, opts) ?? {}
      reqOptions.params = getParams(opts, reqOptions)
      const { status } = await NewRequester.delete<any>(opts.delete?.getURL ? opts.delete.getURL(id, opts) : `${opts.baseURL}/${id}`, reqOptions)
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status))
      onUpdateOptions({
        _status: status
      })
    }

    if (state().items) {
      onUpdateItems(state().items!.filter((item: any) => {
        return getPrimaryKey(item) !== id
      }))
    }
  } catch (e) {
    onUpdateStatus(ObjectHelper.toErrorStatus(state().status, e))
    onUpdateOptions({
      _status: e.response?.status
    })
  }

  onUpdateStatus(ObjectHelper.toCompleteStatus(state().status))
}

export const apiFetchHelper = async (
  state: () => IAPIFetchState<any>,
  onUpdateStatus: (status: IStatus) => void,
  onUpdateOptions: (options: IPageOptions) => void,
  onUpdateItems: (items: any[]) => void,
  page: number,
  query: string,
  opts: IPageLoaderOptions<any> & IPageFetchLoaderOptions
) => {
  onUpdateStatus(ObjectHelper.toLoadingStatus(state().status))
  onUpdateOptions({
    ...state().options,
    ...opts,
    currentPage: page,
    search: query,
    primary: opts.primary ?? 'id',
    _status: undefined
  })

  const getOptions = (data: any) => ({
    ...state().options,
    currentPageCount: state().items?.length || 0,
    currentPage: page,
    totalCount: data.total,
    limit: data.limit,
    search: query,
    totalPage: Math.ceil(data.total / data.limit)
  })

  const reqOptions = opts.fetch?.getRequestOptions?.(page, query, opts) ?? {}
  const limit = reqOptions.params?.limit || CONFIG.LIMIT_PER_PAGE

  reqOptions.params = {
    limit: limit,
    page: page,
    q: (query || '').trim()
  }

  reqOptions.params = getParams(opts, reqOptions)

  try {
    if (opts.isMock) {
      await new Promise(resolve => {
        setTimeout(resolve, 500)
      })
      const res: any = {
        data: {
          items: opts.mockItems || [],
          totalCount: (opts.mockItems || []).length
        }
      }
      onUpdateItems(_shuffle(res.data.items))
      onUpdateOptions(getOptions(res.data))
      onUpdateStatus(ObjectHelper.toSuccessStatus(status))
    } else {
      const {
        data: {
          items: itemss,
          ...moreOptions
        },
        status
      } = (await NewRequester.get<any>(opts.fetch?.getURL ? opts.fetch.getURL(page, query, opts) : opts.baseURL, reqOptions))
      onUpdateItems(itemss)
      onUpdateOptions({
        ...getOptions(moreOptions),
        _status: status
      })
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status))
    }
  } catch (e) {
    onUpdateStatus(ObjectHelper.toErrorStatus(state().status, e))
    onUpdateOptions({
      ...state().options,
      _status: e.response?.status
    })
  }

  onUpdateStatus(ObjectHelper.toCompleteStatus(state().status))
}

export const apiFindHelper = async (
  state: () => IAPIFindState<any>,
  onUpdateStatus: (status: IStatus) => void,
  onUpdateOptions: (options: { [key: string]: any }) => void,
  onUpdateData: (data: any) => void,
  id: any,
  opts: IPageLoaderOptions<any> & IPageFindLoaderOptions
) => {
  onUpdateStatus(ObjectHelper.toLoadingStatus(state().status))
  onUpdateOptions({})
  try {
    if (opts.isMock) {
      const res: any = {
        data: opts.mockItems![0]
      }

      onUpdateData(res.data)
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status))
    } else {
      const reqOptions = opts.find?.getRequestOptions?.(id, opts) ?? {}
      reqOptions.params = getParams(opts, reqOptions)
      const {
        data,
        status
      } = await NewRequester.get<any>(opts.find?.getURL ? opts.find.getURL(id, opts) : `${opts.baseURL}/${id}`, reqOptions)
      onUpdateData(data)
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status))
      onUpdateOptions({
        _status: status
      })
    }
  } catch (e) {
    onUpdateStatus(ObjectHelper.toErrorStatus(state().status, e))
    onUpdateOptions({
      _status: e.response?.status
    })
  }

  onUpdateStatus(ObjectHelper.toCompleteStatus(state().status))
}
export const updateHelper = async (
  state: () => IAPIUpdateState<any>,
  onUpdateStatus: (status: IStatus) => void,
  onUpdateOptions: (options: { [key: string]: any }) => void,
  onUpdateData: (data: any) => void,
  onUpdateItems: (data: any[]) => void,
  onUpdateOldData: (data: any) => void,
  id: any,
  data: any,
  opts: IPageLoaderOptions<any> & IPageUpdateLoaderOptions
) => {
  onUpdateStatus(ObjectHelper.toLoadingStatus(state().status))
  onUpdateOptions({})
  try {
    let finalItem: any
    if (opts.isMock) {
      const res: any = {
        data: opts.mockItems![0]
      }

      onUpdateData(res.data)
      finalItem = res.data
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status))
    } else {
      const reqOptions = opts.update?.getRequestOptions?.(id, data, opts) ?? {}
      reqOptions.params = getParams(opts, reqOptions)
      const {
        data: item,
        status
      } = await NewRequester.put<any>(opts.update?.getURL ? opts.update.getURL(id, data, opts) : `${opts.baseURL}/${id}`, data, reqOptions)
      onUpdateData(item)
      finalItem = item
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status))
      onUpdateOptions({
        _status: status
      })
    }

    if (state().oldData) {
      onUpdateOldData(finalItem!)
    }

    if (state().items) {
      const index = _findIndex(state().items, item => item.id === id)
      if (index !== -1) {
        const itemsTemp = state().items!
        itemsTemp[index] = finalItem!
        state().items = itemsTemp
      }
    }
  } catch (e) {
    onUpdateStatus(ObjectHelper.toErrorStatus(state().status, e))
    onUpdateOptions({
      _status: e.response?.status
    })
  }

  onUpdateStatus(ObjectHelper.toCompleteStatus(state().status))
}
