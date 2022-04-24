import { _get, _isEmpty } from '~/utils/lodash'
import { ParamHelper } from '~/utils/ParamHelper'

export interface IStatus {
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  isLoaded: boolean,
  errorData: any | null,
}

export class ObjectHelper {
  static createOption (value: any, label: string = ''): IOption {
    return {
      value,
      label: label
    }
  }

  static toOption (data: any, valueAttr: string = 'id', labelAttr: string = 'name'): IOption {
    data = data || {}
    const value = _get(data, valueAttr, '')
    return {
      value,
      label: _get(data, labelAttr, value)
    }
  }

  static toOptions (data: any, valueAttr: string = 'id', labelAttr: string = 'name'): IOption[] {
    if (!data) {
      return []
    }
    const value = _get(data, valueAttr, '')
    return [
      {
        value,
        label: _get(data, labelAttr, value)
      }]
  }

  static toStatus (obj: any): IStatus {
    return {
      isLoaded: ParamHelper.getBoolFalse(obj.isLoaded),
      isLoading: ParamHelper.getBoolFalse(obj.isLoading),
      isError: ParamHelper.getBoolFalse(obj.isError),
      isSuccess: ParamHelper.getBoolFalse(obj.isSuccess),
      errorData: obj.errorData || null
    }
  }

  static toLoadingStatus (obj: any): any {
    return {
      ...obj,
      isLoaded: false,
      isError: false,
      isLoading: true,
      isSuccess: false
    }
  }

  static toItemsSuccessStatus (obj: any, items: any[]): any {
    return {
      ...obj,
      isSuccess: true,
      errorData: null,
      items
    }
  }

  static toObjectSuccessStatus (obj: any, data: any = null): any {
    return {
      ...obj,
      isSuccess: true,
      errorData: null,
      data
    }
  }

  static toErrorStatus (obj: any, error: any): any {
    let newError = error.response?.data
    if (!error.response?.status) {
      newError = {
        code: 'NETWORK_ERROR',
        message: 'Network error'
      }
    }
    return {
      ...obj,
      isError: true,
      isSuccess: false,
      errorData: newError
    }
  }

  static toSuccessStatus (obj: any): any {
    return {
      ...obj,
      isSuccess: true,
      errorData: null
    }
  }

  static toCompleteStatus (obj: any): any {
    return {
      ...obj,
      isLoading: false,
      isLoaded: true
    }
  }

  static createStatus (): IStatus {
    return {
      isLoaded: false,
      isLoading: false,
      isError: false,
      isSuccess: false,
      errorData: null
    }
  }

  static isInvalidParams (errorData: any): boolean {
    return errorData.code === 'INVALID_PARAMS'
  }

  static isEmpty = (object: any): boolean => {
    return _isEmpty(object)
  }
}
