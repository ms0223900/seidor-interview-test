import { Locales, PaymentSuccessResponse } from 'types';

const PaymentResHandlers = {
  parseRes(res: PaymentSuccessResponse, locale='en' as Locales) {
    return ({
      title: res.title[locale],
      message: res.message[locale],
    });
  }
};

export default PaymentResHandlers;