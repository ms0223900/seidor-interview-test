import PaymentResHandlers from 'api/functions/PaymentResHandlers';
import sendPaymentRequest from 'api/functions/sendPaymentRequest';
import { StepThreeOrderConfirmationProps } from 'components/Steps/types';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useHistory, useParams } from 'react-router-dom';
import routes, { RoutesCheckoutParamsKey } from 'routes/routes';
import { Locales, PaymentFormValues } from 'types';
import StepHandlers from './StepHandlers';

const useStepView = () => {
  const {
    step
  } = useParams<{ step: RoutesCheckoutParamsKey }>();
  const history = useHistory();
  const {
    locale,
  } = useIntl();
  const initStepNow = StepHandlers.convertParamsToStep(step);

  const [stepNow, setStepNow] = useState(initStepNow || 1);
  const [paymentRes, setPaymentRes] = useState<StepThreeOrderConfirmationProps['intlPaymentInfo']>();
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
      if(res) {
        setPaymentRes(
          PaymentResHandlers.parseRes(res)
        );
      }
      history.push(`/checkout/${routes.checkout['step-3-order-confirmation']}`);
    })();
  }, [formValues, history]);

  const handleChangeStep = useCallback((step: number) => {
    // setStepNow(s => step || s + 1);
    const params = StepHandlers.convertStepToParams(step);
    history.push(`/checkout/${params}`);
  }, [history]);

  const handleSetForm = useCallback((key: keyof PaymentFormValues) => (e: ChangeEvent<any>) => {
    setForm(f => ({
      ...f,
      [key]: e.target.value
    }));
  }, []);

  useEffect(() => {
    const stepNow = StepHandlers.convertParamsToStep(step);
    setStepNow(stepNow);
  }, [step]);

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