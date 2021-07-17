import { ORDER_CONFIRMATION_API } from 'api/API';
import { Locales, PaymentFormValues, PaymentSuccessResponse } from 'types';
import { PAYMENT_FAILED_PROPABILITY } from 'View/StepView/configs';

export interface PaymentInfoOptions extends PaymentFormValues {
}

export interface PaymentSuccessInfo {
  
}

// add options for future usage
const sendPaymentRequest = async (options: PaymentInfoOptions): Promise<PaymentSuccessResponse | undefined> => {
  const isPaymentSuccess = Math.random() > PAYMENT_FAILED_PROPABILITY;
  const res = await fetch(ORDER_CONFIRMATION_API).then(res => res.json());
  if(isPaymentSuccess) {
    return res;
  }
  return undefined;
};

export default sendPaymentRequest;