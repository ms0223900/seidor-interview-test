import { Locales, PaymentSuccessResponse } from 'types';

const PaymentResHandlers = {
  parseRes(res: PaymentSuccessResponse, locale='en' as Locales) {
    const resLocale = locale === 'en' ? 'en' : 'zh_CN';
    return ({
      title: res.title[resLocale],
      message: res.message[resLocale],
    });
  }
};

export default PaymentResHandlers;