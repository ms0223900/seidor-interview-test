import React, { memo } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { AccountCircleRounded, Flag, HelpOutline, QuestionAnswerRounded, TranslateOutlined } from '@material-ui/icons';
import HeaderIconButton from './HeaderIconButton';
import { HeaderProps } from './types';
import LocaleSelector from 'components/Common/LocaleSelector';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: `${theme.spacing(2)}px 0px`,
  },
  iconsWrapper: {
    display: 'flex',
  }
}));

const Header = (props: HeaderProps) => {
  const classes = useStyles();
  const iconButtonListData = [
    {
      otherProps: {},
      icon: HelpOutline,
      titleComponent: (
        <Typography>{'HELP'}</Typography>
      ),
    },
    {
      otherProps: {},
      icon: AccountCircleRounded,
      titleComponent: (
        <Typography>{'SIGN IN'}</Typography>
      ),
    },
    {
      otherProps: props,
      icon: TranslateOutlined,
      titleComponent: (
        <LocaleSelector {...props} />
      ),
    },
  ];

  return (
    <Box className={classes.root}>
      <Box className={classes.iconsWrapper}>
        {iconButtonListData.map((data, i) => (
          <HeaderIconButton
            {...data.otherProps}
            key={i}
            IconComponent={data.icon}
            titleComponent={data.titleComponent}
          />
        ))}
      </Box>
    </Box>
  );
};

export default memo(Header);