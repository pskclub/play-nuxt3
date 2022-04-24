import { IAPIObjectState, IStatus } from '~/core/api/types'
import { ObjectHelper } from '~/utils/ObjectHelper'
import { NewRequester } from '~/core/Requester'
import { IObjectLoaderOptions, IObjectRunLoaderOptions } from '~/core/api/loaderTypes'
import { getParams } from '~/core/api/utils'

export const apiObjectHelper = async (
  state: () => IAPIObjectState<any>,
  onUpdateStatus: (status: IStatus) => void,
  onUpdateOptions: (options: { [key: string]: any }) => void,
  onUpdateData: (data: any) => void,
  data: any,
  opts: IObjectLoaderOptions<any> & IObjectRunLoaderOptions<any>
) => {
  onUpdateStatus(ObjectHelper.toLoadingStatus(state().status))
  onUpdateOptions({})
  try {
    if (opts.isMock) {
      const res: any = {
        data: opts.mockItem
      }

      onUpdateData(res.data)
      onUpdateStatus(ObjectHelper.toSuccessStatus(state().status))
    } else {
      const reqOptions = opts.getRequestOptions?.(data, opts) ?? {}
      reqOptions.params = getParams(opts, reqOptions)
      const {
        data: item,
        status
      } = await NewRequester.create<any>(opts.method, opts.getURL ? opts.getURL(data, opts) : opts.url, data, reqOptions)
      onUpdateData(item)
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
