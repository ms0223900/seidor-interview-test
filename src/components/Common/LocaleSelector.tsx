import React, { memo } from 'react';
import { Box, MenuItem, Select, SelectProps } from '@material-ui/core';
import { Locales } from 'types';
import { ALL_LOCALES } from 'locales';

export interface LocaleSelectorProps {
  allLocales: typeof ALL_LOCALES
  localeVal: Locales
  onChangeLocale: SelectProps['onChange']
}

const LocaleSelector = (props: LocaleSelectorProps) => {
  const {
    allLocales,
    localeVal,
    onChangeLocale,
  } = props;

  return (
    <Select
      value={localeVal}
      onChange={onChangeLocale}
    >
      {allLocales.map((locale) => (
        <MenuItem
          key={locale.locale}
          value={locale.locale}
        >
          {locale.localeName}
        </MenuItem>
      ))}
    </Select>
  );  
};

export default memo(LocaleSelector);