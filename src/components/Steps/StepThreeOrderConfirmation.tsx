import React, { memo } from 'react';
import { Box, Typography } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import { StepThreeOrderConfirmationProps } from './types';

const StepThreeOrderConfirmation = (props: StepThreeOrderConfirmationProps) => {
  if(!props.paymentInfo) {
    return (
      <Typography variant={'h4'}>
        {'Payment failed :('}
        {/* <Redirect to={`/checkout/${routes.checkout['step-1-my-data']}`} /> */}
      </Typography>
    );
  }
  return (
    <Box>
      <Typography variant={'h4'}>
        {props.paymentInfo.title}
      </Typography>
      <Done style={{
        fontSize: '8em',
      }} />
      <Typography>
        {props.paymentInfo.message}
      </Typography>
    </Box>
  );
};

export default memo(StepThreeOrderConfirmation);