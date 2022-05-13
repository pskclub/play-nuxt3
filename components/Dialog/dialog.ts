export enum DialogIconType {
  SUCCESS = 'success'
}

export interface IDialogDeleteOptions {
  title: string,
  description: string,
  confirmText?: string
  cancelText?: string
}

export type IDialogStateType = 'success' | 'danger' | 'info' | 'warning'

export interface IDialogConfirmOptions {
  type: IDialogStateType,
  title: string,
  description?: string
  confirmText?: string
  cancelText?: string
}

export interface IDialogInfoOptions {
  type: IDialogStateType,
  title: string,
  description?: string
  confirmText?: string
}

export interface IDialogErrorOptions {
  title: string,
  description?: string
  confirmText?: string
}

const getOptions = (type: string, options: object): any[] => (['dialog', {
  view: 'dialog',
  _type: type,
  ...options
}])

export const useDialog = () => {
  return {
    // @ts-ignore
    confirm: (options: IDialogConfirmOptions): Promise<any> => Vue.dialog.confirm(...getOptions('confirm', options)),
    // @ts-ignore
    delete: (options: IDialogDeleteOptions): Promise<any> => Vue.dialog.confirm(...getOptions('confirm', {
      ...options,
      type: 'danger'
    })),
    // @ts-ignore
    info: (options: IDialogInfoOptions): Promise<any> => Vue.dialog.confirm(...getOptions('info', options)),
    // @ts-ignore
    error: (options: IDialogErrorOptions): Promise<any> => Vue.dialog.confirm(...getOptions('info', {
      ...options,
      type: 'danger'
    }))
  }
}
