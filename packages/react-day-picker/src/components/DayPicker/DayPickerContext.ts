import english from 'date-fns/locale/en-US';
import React from 'react';

import {
  ClassNames,
  Components,
  Formatters,
  Labels,
  ModifiersClassNames,
  ModifiersMatchers
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
 * Represent the value of the [[DayPickerContext]]. Extends `DayPickerProps`
 * with values used by the internal components: `prevMonth`, `nextMonth`,
 * `currentMonth`, `focusedDay`.
 */
export interface DayPickerContextValue
  extends Omit<
    DayPickerProps,
    'className' | 'style' | 'initialMonth' | 'month'
  > {
  /** The month coming before the current one */
  prevMonth?: Date;
  /** The month coming after the current one */
  nextMonth?: Date;
  /** The currently displayed month. When multiple months, is the first. */
  currentMonth: Date;
  /** The day that should focus when rendering. Used for keyboard navigation */
  focusedDay?: Date;

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
}

export const defaultContext: DayPickerContextValue = {
  classNames: defaultClassNames,
  components: defaultComponents,
  currentMonth: new Date(),
  formatters: defaultFormatters,
  labels: defaultLabels,
  locale: english,
  modifierPrefix: 'rdp-day_',
  modifiers: defaultModifiers,
  numberOfMonths: 1,
  today: new Date()
};

/**
 * Use this context to consume props and state between DayPicker components.
 */
export const DayPickerContext = React.createContext(defaultContext);
