import React, { memo } from 'react';
import { Box, CircularProgress, Container, makeStyles, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import StepStatus from 'components/Steps/StepStatus';
import useStepView from './functions/useStepView';
import StepOneMyData from 'components/Steps/StepOneMyData';
import StepThreeOrderConfirmationContainer from 'containers/Steps/StepThreeOrderConfirmationContainer';
import StepTwoPayment from 'components/Steps/StepTwoPayment';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  stepsWrapper: {
    padding: theme.spacing(5),
  }
}));

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
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <StepStatus stepNow={stepNow} />
      {/* {loading && (
        <CircularProgress />
      )} */}
      <Paper elevation={3} className={classes.stepsWrapper}>
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
            intlPaymentInfo={paymentRes} 
          />
        )}
      </Paper>
    </Container>
  );
};

export default memo(StepView);