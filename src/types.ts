export type CallBack<Params extends any=[], Return extends any={}> = (params?: Params) => Return

export type Locales = 'zh-cn' | 'en'

export interface PaymentFormValues {
  name: string
  lastName: string
  paymentInfo: any
}

export interface PaymentSuccessResponse {
  title: Record<Locales, string>
  message: Record<Locales, string>
  img: string
}