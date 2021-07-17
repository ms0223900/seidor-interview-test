import React, { memo } from 'react';
import { Box } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import StepStatus from 'components/Steps/StepStatus';

const StepView = () => {
  return (
    <Box>
      <StepStatus stepNow={2} />
    </Box>
  );
};

export default memo(StepView);