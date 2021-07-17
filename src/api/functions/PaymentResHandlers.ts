import { StepThreeOrderConfirmationProps } from 'components/Steps/types';
import { Locales, PaymentSuccessResponse } from 'types';

const PaymentResHandlers = {
  parseRes(res: PaymentSuccessResponse): StepThreeOrderConfirmationProps['intlPaymentInfo'] {
    return ({
      'zh-cn': {
        title: res.title.zh_CN,
        message: res.message.zh_CN,
      },
      'en': {
        title: res.title.en,
        message: res.message.en,
      }
    });
  }
};

export default PaymentResHandlers;