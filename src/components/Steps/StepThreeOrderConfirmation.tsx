import React, { memo } from 'react';
import { Box, Typography } from '@material-ui/core';
import { StepThreeOrderConfirmationProps } from './types';

const StepThreeOrderConfirmation = (props: StepThreeOrderConfirmationProps) => {
  if(!props.paymentInfo) {
    return (
      <Box>
        {'Payment failed :('}
        {/* <Redirect to={`/checkout/${routes.checkout['step-1-my-data']}`} /> */}
      </Box>
    );
  }
  return (
    <Box>
      <Typography variant={'h4'}>
        {props.paymentInfo.title}
      </Typography>
      <Typography>
        {props.paymentInfo.message}
      </Typography>
    </Box>
  );
};

export default memo(StepThreeOrderConfirmation);