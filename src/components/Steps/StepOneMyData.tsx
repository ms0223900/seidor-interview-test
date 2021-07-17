import React, { memo } from 'react';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { ArrowRight, Title } from '@material-ui/icons';
import { stepTitles } from 'View/StepView/configs';
import { StepOneMyDataProps } from './types';

const useStyles = makeStyles(theme => ({
  root: {
     
  },
  inputWrapper: {
    maxWidth: 400,
    margin: 'auto',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const inputKeys: Array<(keyof StepOneMyDataProps['values'])> = [
  'name', 'lastName'
];

const StepOneMyData = (props: StepOneMyDataProps) => {
  const {
    values,
    onContinue,
    onInputForm,
  } = props;
  const classes = useStyles();
  
  return (
    <Box>
      <Typography variant={'h4'}>
        {stepTitles[0]}
      </Typography>
      <Typography>
        {'Please enter your personal data and press continue'}
      </Typography>
      <Box className={classes.inputWrapper}>
        {(inputKeys).map((key) => (
          <Box paddingBottom={3}>
            <TextField
              key={key}
              fullWidth={true}
              variant={'outlined'}
              error={!values[key]}
              name={key}
              label={key.toUpperCase()}
              placeholder={key}
              required={true}
              value={values[key]}
              onChange={onInputForm(key)} 
            />
          </Box>
        ))}
        <Box textAlign={'right'}>
          <Button
            variant={'outlined'}
            color={'primary'}
            disabled={!(values.lastName && values.name)}
            onClick={onContinue}
          >
            {'Continue'}
            <ArrowRight />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(StepOneMyData);