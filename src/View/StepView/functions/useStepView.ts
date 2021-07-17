import { useState } from 'react';
import { useParams } from 'react-router-dom';

const useStepView = () => {
  const {
    step
  } = useParams<{ step: string }>();
  const [stepNow, setStepNow] = useState();
};

export default useStepView;