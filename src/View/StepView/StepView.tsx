import React, { memo } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import StepStatus from 'components/Steps/StepStatus';
import useStepView from './functions/useStepView';
import StepOneMyData from 'components/Steps/StepOneMyData';
import StepThreeOrderConfirmationContainer from 'containers/Steps/StepThreeOrderConfirmationContainer';
import StepTwoPayment from 'components/Steps/StepTwoPayment';

const StepView = () => {
  const {
    stepNow,
    loading,
    formValues,
    paymentRes,
    handleChangeStep,
    handlePay,
    handleSetForm,
  } = useStepView();

  return (
    <Box>
      <StepStatus stepNow={stepNow} />
      {loading && (
        <CircularProgress />
      )}
      {stepNow === 1 && (
        <StepOneMyData
          values={formValues}
          onContinue={() => handleChangeStep(2)}
          onInputForm={handleSetForm}
        />
      )}
      {stepNow === 2 && (
        <StepTwoPayment
          loading={loading}
          onBack={() => handleChangeStep(1)}
          onPay={handlePay}
        />
      )}
      {stepNow === 3 && (
        <StepThreeOrderConfirmationContainer 
          paymentInfo={paymentRes} 
        />
      )}
    </Box>
  );
};

export default memo(StepView);