import React, { memo } from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { ArrowRight, Title } from '@material-ui/icons';
import { stepTitles } from 'View/StepView/configs';
import { StepOneMyDataProps } from './types';

const StepOneMyData = (props: StepOneMyDataProps) => {
  const {
    values,
    onContinue,
  } = props;
  
  return (
    <Box>
      <Typography variant={'h2'}>
        {stepTitles[0]}
      </Typography>
      <Typography>
        {'Please enter your personal data and press continue'}
      </Typography>
      <TextField name="name" placeholder="Name" required={true} value={values.name} />
      <TextField name="last-name" placeholder="Last Name" required={true} value={values.lastName} />
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