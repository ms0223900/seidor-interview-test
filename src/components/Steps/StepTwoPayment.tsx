import React, { memo } from 'react';
import { Box, Button, CircularProgress, makeStyles, Typography } from '@material-ui/core';
import { stepTitles } from 'View/StepView/configs';
import { ArrowLeft, ArrowRight, CreditCard } from '@material-ui/icons';
import images from 'static/images';
import { StepTwoPaymentProps } from './types';
import IntlFormattedMessage from 'components/Common/IntlFormattedMessage';

const useStyles = makeStyles(theme => ({
  root: {
     
  },
  bottomWrapper: {
    maxWidth: 400,
    margin: 'auto',
  },
  infoWrapper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    border: '1px solid #aaa',
    borderRadius: theme.spacing(0.5),
    '& img': {
      maxWidth: 60,
    }
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2),
  }
}));

const StepTwoPayment = (props: StepTwoPaymentProps) => {
  const {
    loading,
    onBack,
    onPay,
  } = props;
  const classes = useStyles();

  return (
    <Box>
      <div className={`${'title-info-wrapper'}`}>
        <Typography variant={'h4'}>
          {stepTitles[1]}
        </Typography>
        <Typography>
          {'After making the payment you will receive a con'}
        </Typography>
      </div>
      <Box className={classes.bottomWrapper}>
        <Box className={classes.infoWrapper}>
          <Box>
            <CreditCard style={{
              fontSize: '6em'
            }} />
            <Typography variant={'h5'}>{'Credit Card'}</Typography>
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
        <Box className={classes.buttonsWrapper}>
          <Button variant={'outlined'} color={'primary'} onClick={onBack} disabled={loading}>
            <ArrowLeft />
            <IntlFormattedMessage
              localeKey={'back'}
            />
          </Button>
          <Button variant={'outlined'} color={'primary'} onClick={onPay} disabled={loading}>
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                <IntlFormattedMessage
                  localeKey={'button.pay'}
                />
                <ArrowRight />
              </>
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(StepTwoPayment);