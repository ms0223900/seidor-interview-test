import React, { memo } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { HeaderIconButtonProps } from './types';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#ddd',
    }
  },
  icon: {
    fontSize: '2em',
    fill: theme.palette.primary.main,
  },
  titleWrapper: {
    paddingLeft: theme.spacing(1),
  }
}));

const HeaderIconButton = (props: HeaderIconButtonProps) => {
  const {
    IconComponent,
    titleComponent,
  } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <IconComponent className={classes.icon} />
      </Box>
      <Box className={classes.titleWrapper}>
        {titleComponent}
      </Box>
    </Box>
  );
};

export default memo(HeaderIconButton);