import { Locales } from 'types';
import common from './common.locale.json';

export type LocaleKeys = keyof typeof common['zh-cn']

export const AllLocaleMessages = {
  'zh-cn': {
    ...common['zh-cn']
  },
  'en': {
    ...common['en']
  }
};

export const getLocaleMessages = (locale: Locales) => {
  switch (locale) {
    case 'zh-cn':
      return AllLocaleMessages['zh-cn'];
    case 'en':
      return AllLocaleMessages['en'];
    default:
      return AllLocaleMessages['en'];
  }
};

export const ALL_LOCALES: {
  locale: Locales,
  localeName: string
}[] = [
  {
    locale: 'en',
    localeName: 'EN'
  },
  {
    locale: 'zh-cn',
    localeName: 'CN'
  }
];