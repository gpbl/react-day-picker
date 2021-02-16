import React from 'react';

import english from 'date-fns/locale/en-US';

import {
  ClassNames,
  Components,
  Formatters,
  Labels,
  ModifiersClassNames,
  ModifiersMatchers,
  NavigationType
} from '../../types';
import { DayPickerProps } from './DayPickerProps';
import {
  defaultClassNames,
  defaultComponents,
  defaultFormatters,
  defaultLabels,
  defaultModifiers
} from './defaults';

/**
 * Represent the value of a [[PropsContext]].
 */
export interface PropsValues
  extends Omit<
    DayPickerProps,
    | 'className'
    | 'style'
    | 'initialMonth'
    | 'month'
    | 'fromMonth'
    | 'toMonth'
    | 'fromYear'
    | 'toYear'
  > {
  today: Date;
  components: Required<Components>;
  labels: Required<Labels>;
  formatters: Required<Formatters>;
  numberOfMonths: number;
  classNames: ClassNames;
  locale: Locale;
  modifiers: ModifiersMatchers;
  modifiersClassNames?: ModifiersClassNames;
  modifierPrefix: string;
  navigationType: NavigationType;
}

export const defaultPropsValues: PropsValues = {
  navigationType: 'buttons',
  classNames: defaultClassNames,
  components: defaultComponents,
  formatters: defaultFormatters,
  labels: defaultLabels,
  locale: english,
  modifierPrefix: 'rdp-day_',
  modifiers: defaultModifiers,
  numberOfMonths: 1,
  today: new Date()
};

/**
 * Context to consume DayPicker original props (with defaults) between
 * components.
 */
export const PropsContext = React.createContext(defaultPropsValues);
