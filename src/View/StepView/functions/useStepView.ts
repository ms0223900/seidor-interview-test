import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { checkoutRoutesMappginSteps } from '../configs';

const useStepView = () => {
  const {
    step
  } = useParams<{ step: string }>();
  const initStepNow = checkoutRoutesMappginSteps[step];
  const [stepNow, setStepNow] = useState(initStepNow || 1);

  return ({
    stepNow,
  });
};

export default useStepView;