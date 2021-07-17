import PaymentResHandlers from 'api/functions/PaymentResHandlers';
import sendPaymentRequest from 'api/functions/sendPaymentRequest';
import { StepThreeOrderConfirmationProps } from 'components/Steps/types';
import { ChangeEvent, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { useHistory, useParams } from 'react-router-dom';
import routes from 'routes/routes';
import { Locales, PaymentFormValues } from 'types';
import { checkoutRoutesMappginSteps } from '../configs';

const useStepView = () => {
  const {
    step
  } = useParams<{ step: string }>();
  const history = useHistory();
  const {
    locale,
  } = useIntl();
  const initStepNow = checkoutRoutesMappginSteps[step];

  const [stepNow, setStepNow] = useState(initStepNow || 1);
  const [paymentRes, setPaymentRes] = useState<StepThreeOrderConfirmationProps['paymentInfo']>();
  const [loading, setLoading] = useState(false);
  const [formValues, setForm] = useState<PaymentFormValues>({
    name: '',
    lastName: '',
    paymentInfo: undefined,
  });

  const handlePay = useCallback(() => {
    (async () => {
      setLoading(true);
      const res = await sendPaymentRequest(formValues);
      setLoading(false);
      
      setPaymentRes(
        PaymentResHandlers.parseRes(res, locale as Locales)
      );
      history.push(`/checkout/${routes.checkout['step-3-order-confirmation']}`);
      setStepNow(3);
    })();
  }, [formValues, history, locale]);

  const handleChangeStep = useCallback((step?: number) => {
    setStepNow(s => step || s + 1);
  }, []);

  const handleSetForm = useCallback((key: keyof PaymentFormValues) => (e: ChangeEvent<any>) => {
    setForm(f => ({
      ...f,
      [key]: e.target.value
    }));
  }, []);

  return ({
    loading,
    stepNow,
    formValues,
    paymentRes,
    handlePay,
    handleChangeStep,
    handleSetForm,
    setStepNow,
  });
};

export default useStepView;