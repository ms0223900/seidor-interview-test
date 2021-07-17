import React, { memo } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { StepThreeOrderConfirmationContainerProps } from './types';
import StepThreeOrderConfirmation from 'components/Steps/StepThreeOrderConfirmation';
import { Redirect } from 'react-router-dom';
import routes from 'routes/routes';

const StepThreeOrderConfirmationContainer = (props: StepThreeOrderConfirmationContainerProps) => {
  return (
    <StepThreeOrderConfirmation {...props} />
  );
};

export default memo(StepThreeOrderConfirmationContainer);