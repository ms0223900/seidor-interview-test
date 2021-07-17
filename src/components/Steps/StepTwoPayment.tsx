import React, { memo } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { stepTitles } from 'View/StepView/configs';
import { ArrowLeft, ArrowRight, CreditCard } from '@material-ui/icons';
import images from 'static/images';
import { StepTwoPaymentProps } from './types';

const StepTwoPayment = (props: StepTwoPaymentProps) => {
  const {
    loading,
    onBack,
    onPay,
  } = props;

  return (
    <Box>
      <Typography variant={'h2'}>
        {stepTitles[1]}
      </Typography>
      <Typography>
        {'After making the payment you will receive a con'}
      </Typography>
      <Box>
        <Box>
          <Box>
            <CreditCard />
            <Typography>{'Credit Card'}</Typography>
          </Box>
          <Typography>
            {`You will be redirected to a secure payment platform. This is a
            secure process. The validation of your payment can take up to
            24 hours.`}
          </Typography>
          <Box>
            {[images.icon_master_card, images.icon_visa].map((img, i) => (
              <img key={i} src={img.src} alt={img.name} />
            ))}
          </Box>
        </Box>
        <Box>
          <Button onClick={onBack} disabled={loading}>
            <ArrowLeft />
            <Typography>{'Back'}</Typography>
          </Button>
          <Button onClick={onPay} disabled={loading}>
            <Typography>{'Pay'}</Typography>
            <ArrowRight />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(StepTwoPayment);