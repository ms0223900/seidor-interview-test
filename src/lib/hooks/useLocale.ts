import { useState } from 'react';
import { Locales } from 'types';

const useLocale = () => {
  const [locale, setLocale] = useState<Locales>('en');

  return ({
    locale,
    setLocale,
  });
};

export default useLocale;