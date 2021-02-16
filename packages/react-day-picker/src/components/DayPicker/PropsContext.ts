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
  classNames: ClassNames;
  components: Required<Components>;
  formatters: Required<Formatters>;
  labels: Required<Labels>;
  locale: Locale;
  modifierPrefix: string;
  modifiers: ModifiersMatchers;
  modifiersClassNames?: ModifiersClassNames;
  navigationType: NavigationType;
  numberOfMonths: number;
  /**
   * A reference to the original props passed to the component. Useful for
   * inspecting in internal components.
   */
  originalProps: DayPickerProps;
  /**
   * The today’s date used in the calendar. If not overridden from props, is the
   * current date.
   */
  today: Date;
}

export const defaultPropsValues: PropsValues = {
  classNames: defaultClassNames,
  components: defaultComponents,
  formatters: defaultFormatters,
  labels: defaultLabels,
  locale: english,
  modifierPrefix: 'rdp-day_',
  modifiers: defaultModifiers,
  navigationType: 'buttons',
  numberOfMonths: 1,
  originalProps: {},
  today: new Date()
};

/**
 * Context to consume DayPicker original props (with defaults) between
 * components.
 */
export const PropsContext = React.createContext(defaultPropsValues);
