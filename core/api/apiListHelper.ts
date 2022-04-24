import { IAPIListState, IStatus } from '~/core/api/types'
import { ObjectHelper } from '~/utils/ObjectHelper'
import { NewRequester } from '~/core/Requester'
import { IListLoaderOptions, IListRunLoaderOptions } from '~/core/api/loaderTypes'
import { getParams } from '~/core/api/utils'

export const apiListHelper = async (
  state: () => IAPIListState<any>,
  onUpdateStatus: (status: IStatus) => void,
  onUpdateOptions: (options: { [key: string]: any }) => void,
  onUpdateItems: (data: any[]) => void,
  data: any,
  opts: IListLoaderOptions<any> & IListRunLoaderOptions<any>
) => {
  onUpdateStatus(ObjectHelper.toLoadingStatus(state().status))
  onUpdateOptions({})
  try {
    if (opts.isMock) {
      const res: any = {
        data: opts.mockItems
      }

      onUpdateItems(res.data)
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status))
    } else {
      const reqOptions = opts.getRequestOptions?.(opts) ?? {}
      reqOptions.params = getParams(opts, reqOptions)
      const {
        data: items,
        status
      } = await NewRequester.get<any[]>(opts.getURL ? opts.getURL(opts) : opts.url, reqOptions)
      onUpdateItems(items)
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
