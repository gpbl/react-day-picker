import React from 'react';

import english from 'date-fns/locale/en-US';

import {
  CaptionLayout,
  ClassNames,
  Components,
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  Formatters,
  Labels,
  ModifiersClassNames,
  ModifiersMatchers,
  MonthChangeEventHandler
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
    | 'month'
    | 'fromMonth'
    | 'toMonth'
    | 'fromYear'
    | 'toYear'
  > {
  captionLayout: CaptionLayout;
  classNames: ClassNames;
  components: Required<Components>;
  formatters: Required<Formatters>;
  labels: Required<Labels>;
  locale: Locale;
  modifierPrefix: string;
  modifiers: ModifiersMatchers;
  modifiersClassNames?: ModifiersClassNames;
  numberOfMonths: number;
  dir?: string;
  /**
   * Will set the current month if DayPicker is in controlled mode. Calls the
   * original `onMonthChange`.
   *
   * This event handler will do nothing if the passed month is outside the
   * allowed months.
   */
  onMonthChange: MonthChangeEventHandler;
  /**
   * Handle focus behavior. Calls the original `onDayBlur` passed from props.
   */
  onDayBlur: DayFocusEventHandler;
  /**
   * Handle click behavior. Calls the original `onDayClick` passed from props.
   */
  onDayClick: DayClickEventHandler;
  /**
   * Handle focus behavior. Calls the original `onDayFocus` passed from props.
   */
  onDayFocus: DayFocusEventHandler;
  /**
   * Handle keyboard navigation. Calls the original `onDayKeyDown` passed from props.
   */
  onDayKeyDown: DayKeyboardEventHandler;
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

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = function noop(): void {};
export const defaultPropsValues: PropsValues = {
  classNames: defaultClassNames,
  components: defaultComponents,
  formatters: defaultFormatters,
  labels: defaultLabels,
  locale: english,
  modifierPrefix: 'rdp-day_',
  modifiers: defaultModifiers,
  captionLayout: 'buttons',
  numberOfMonths: 1,
  originalProps: {},
  today: new Date(),
  type: 'single',
  // These will be replaced by proper event handlers in DayPicker.tsx so we can
  // safely use noop here
  onMonthChange: noop,
  onDayBlur: noop,
  onDayClick: noop,
  onDayFocus: noop,
  onDayKeyDown: noop
};

/**
 * Context to consume DayPicker original props (with defaults) between
 * components.
 */
export const PropsContext = React.createContext(defaultPropsValues);
