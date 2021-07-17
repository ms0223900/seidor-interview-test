import { IconProps, SvgIconProps, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { LocaleSelectorProps } from 'components/Common/LocaleSelector';
import { ComponentType, ReactNode } from 'react';
import { CallBack, Locales } from 'types';

export interface HeaderIconButtonProps {
  IconComponent: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
  titleComponent: ReactNode
}

export interface HeaderProps extends LocaleSelectorProps {
}