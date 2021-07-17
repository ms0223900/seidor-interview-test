import React, { memo, ReactNode } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { CheckOutlined } from '@material-ui/icons';
import { SingleStepStatusData, StepStatusItemProps, StepStatusProps } from './types';
import StepIcon from './StepIcon';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  middleLine: {
    position: 'relative',
    top: theme.spacing(2.5),
    width: 100,
    borderTop: '1px dashed #000',
  },
  stepTitle: {
    paddingTop: theme.spacing(1)
  }
}));

const StepItem = (props: StepStatusItemProps) => {
  const {
    stepTitle
  } = props;
  const classes = useStyles();
  return (
    <Box paddingX={1}>
      <StepIcon {...props} />
      <Typography className={classes.stepTitle} variant={'h6'} align={'center'}>
        {stepTitle}
      </Typography>
    </Box>
  );
};

const stepTitles = [
  'My Data', 'Payment'
];
const getStepListData = (stepNow: number): SingleStepStatusData[] => stepTitles.map((title, i) => ({
  stepTitle: title,
  stepNum: i + 1,
  isDone: stepNow > (i + 1)
}));

const StepStatus = ({
  stepNow
}: StepStatusProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {getStepListData(stepNow).map((data, i) => (
        <>
          {i > 0 && (
            <Box className={classes.middleLine} />
          )}
          <StepItem {...data}/>
        </>
      ))}
    </Box>
  );
};

export default memo(StepStatus);