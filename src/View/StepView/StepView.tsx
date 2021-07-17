import React, { memo } from 'react';
import { Box } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const StepView = () => {
  const {
    step
  } = useParams<{ step: string }>();
  return (
    <Box>
      {step}
    </Box>
  );
};

export default memo(StepView);