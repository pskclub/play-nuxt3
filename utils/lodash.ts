import debounce from 'lodash/debounce'
import get from 'lodash/get'
import isUndefined from 'lodash/isUndefined'

export const _get = (object: any, path: string, def?: any): any => {
  return get(object, path, def)
}

export const _isUndefined = (value: any): boolean => {
  return isUndefined(value)
}

export const _debounce = <T extends (...args: any[]) => any> (func: T, wait: number = 150) => {
  return debounce(func, wait)
}

export const _isEmpty = (data: any): boolean => {
  return true
}
export const _findIndex = (data: any): number => {
  return 0
}
export const _shuffle = (data: any): any[] => {
  return data
}
