import { Box, makeStyles, Theme } from "@material-ui/core";
import { CheckOutlined } from "@material-ui/icons";
import { memo } from "react";
import { StepStatusItemProps } from "./types";

export interface StepIconProps extends Pick<StepStatusItemProps, 'isDone' | 'stepNum'> {
  
}

const useStyles = makeStyles<Theme, StepIconProps>(theme => ({
  root: props => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: 'auto',
    backgroundColor: props.isDone ? '#60A918' : '#1BA0E1',
    borderRadius: '100%',
    color: '#fff',
    fontSize: 26,
  })
}));

const StepIcon = (props: Pick<StepStatusItemProps, 'isDone' | 'stepNum'>) => {
  const {
    isDone,
    stepNum,
  } = props;
  const classes = useStyles(props);

  return (
    <Box className={classes.root}>
      {isDone ? <CheckOutlined /> : stepNum}
    </Box>
  );
};

export default memo(StepIcon);