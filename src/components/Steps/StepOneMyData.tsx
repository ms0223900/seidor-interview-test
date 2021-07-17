import React, { memo } from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { ArrowRight, Title } from '@material-ui/icons';
import { stepTitles } from 'View/StepView/configs';
import { StepOneMyDataProps } from './types';
import { PaymentFormValues } from 'types';

const inputKeys: Array<(keyof StepOneMyDataProps['values'])> = [
  'name', 'lastName'
];

const StepOneMyData = (props: StepOneMyDataProps) => {
  const {
    values,
    onContinue,
    onInputForm,
  } = props;
  
  return (
    <Box>
      <Typography variant={'h2'}>
        {stepTitles[0]}
      </Typography>
      <Typography>
        {'Please enter your personal data and press continue'}
      </Typography>
      {(inputKeys).map((key) => (
        <>
          <TextField
            key={key}
            variant={'outlined'}
            error={!values[key]}
            name={key}
            label={key}
            placeholder={key.toUpperCase()}
            required={true}
            value={values[key]}
            onChange={onInputForm(key)} 
          />
        </>
      ))}
      <Box>
        <Button onClick={onContinue}>
          {'Continue'}
          <ArrowRight />
        </Button>
      </Box>
    </Box>
  );
};

export default memo(StepOneMyData);