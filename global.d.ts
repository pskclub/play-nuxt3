interface IError {
  code: string
  message: string
}

interface IOption {
  label: string
  value: any
}

interface EventInput {target: HTMLInputElement}

declare module 'vue2-datepicker'
declare module 'luxon'
