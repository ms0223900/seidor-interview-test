import { ChangeEvent, ReactNode } from 'react';
import { CallBack, Locales, PaymentFormValues } from 'types';

export interface SingleStepStatusData {
  isDone: boolean
  stepNum: number
  stepTitle: ReactNode
}
export interface StepStatusItemProps extends SingleStepStatusData {
  
}

export interface StepStatusProps {
  stepNow: number
}

export interface StepOneMyDataProps {
  values: {
    name: string
    lastName: string
  }
  onInputForm: (key: keyof PaymentFormValues) => (e: ChangeEvent<any>) => any
  onContinue: CallBack<any, any>
}

export interface StepTwoPaymentProps {
  loading: boolean
  onBack: CallBack<any, any>
  onPay: CallBack<any, any>
}

export interface StepThreeOrderConfirmationProps {
  intlPaymentInfo: Record<Locales, {
    title: string
    message: string
  }> | undefined
}