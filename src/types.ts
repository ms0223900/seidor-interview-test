export type CallBack<Params extends any=[], Return extends any={}> = (params?: Params) => Return

export type Locales = 'zh-cn' | 'en'
export type ResLocales = 'zh_CN' | 'en'

export interface PaymentFormValues {
  name: string
  lastName: string
  paymentInfo: any
}



export interface PaymentSuccessResponse {
  title: Record<ResLocales, string>
  message: Record<ResLocales, string>
  img: string
}