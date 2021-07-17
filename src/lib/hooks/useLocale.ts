import { getLocaleMessages } from 'locales';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { Locales } from 'types';

const useLocale = () => {
  const [localeVal, setLocale] = useState<Locales>('en');

  const handleChangeLocale = useCallback((e: ChangeEvent<any>) => {
    setLocale(e.target.value as Locales);
  }, []);

  const messages = getLocaleMessages(localeVal);

  return ({
    messages,
    localeVal,
    setLocale,
    handleChangeLocale,
  });
};

export default useLocale;