import { ReactNode } from 'react';
import { CallBack } from 'types';

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
  onContinue: CallBack<any, any>
}