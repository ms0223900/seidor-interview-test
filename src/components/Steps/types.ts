import { ReactNode } from "react";

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