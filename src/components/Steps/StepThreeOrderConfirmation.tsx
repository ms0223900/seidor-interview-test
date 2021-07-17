import React, { memo } from 'react';
import { Box, Typography } from '@material-ui/core';
import { Done } from '@material-ui/icons';
import { StepThreeOrderConfirmationProps } from './types';
import useLocale from 'lib/hooks/useLocale';
import { useIntl } from 'react-intl';
import { Locales } from 'types';

const StepThreeOrderConfirmation = (props: StepThreeOrderConfirmationProps) => {
  const {
    locale,
  } = useIntl();
  if(!props.intlPaymentInfo) {
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
        {props.intlPaymentInfo[locale as Locales].title}
      </Typography>
      <Done style={{
        fontSize: '8em',
      }} />
      <Typography>
        {props.intlPaymentInfo[locale as Locales].message}
      </Typography>
    </Box>
  );
};

export default memo(StepThreeOrderConfirmation);