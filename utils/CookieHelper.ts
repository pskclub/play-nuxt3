import Cookies from 'cookie-universal'
import { CookieSerializeOptions } from 'cookie'

export class CookieHelper {
  static set (name: string, data: any, options?: CookieSerializeOptions) {
    const cookies = Cookies()
    cookies.set(name, data, options)
  }

  static get (name: string, options?: {
    fromRes?: boolean
    parseJSON?: boolean
  }): any {
    const cookies = Cookies()
    return cookies.get(name, options)
  }

  static remove (name: string, opts?: CookieSerializeOptions): void {
    const cookies = Cookies()
    cookies.remove(name, opts)
  }
}
