import React from 'react';
import { Box, Typography, TypographyProps, makeStyles, Theme } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { AllLocaleMessages, LocaleKeys } from 'locales';


export interface IntlFormattedMessageProps<Values> extends TypographyProps {
  values?: Values,
  localeKey: LocaleKeys,
}

const useStyles = makeStyles<Theme, IntlFormattedMessageProps<any>>(theme => ({
  root: {
    color: props => props.color === 'primary' ? theme.palette.primary.dark : props.color,
    whiteSpace: 'pre-wrap',
  }
}));

function IntlFormattedMessage<Values extends Record<string, any>>(props: IntlFormattedMessageProps<Values>) {
  const {
    values,
    localeKey,
    variant,
  } = props;
  const classes = useStyles(props);
  
  return (
    <>
      <FormattedMessage
        id={localeKey}
        defaultMessage={AllLocaleMessages['zh-cn'][localeKey]}
        values={values}>
        {txt => (
          <Typography
            className={classes.root}
            {...props}
            variant={variant}
          >
            {txt}
          </Typography>
        )}
      </FormattedMessage>
    </>
  );
}

export default IntlFormattedMessage;