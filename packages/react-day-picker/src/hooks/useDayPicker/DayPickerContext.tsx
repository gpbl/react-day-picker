import * as React from 'react';

import { Locale } from 'date-fns';
import english from 'date-fns/locale/en-US';

import { Day, Dropdown, Head, Row, WeekNumber } from '../../components';
import {
  CaptionLayout,
  ClassNames,
  Components,
  DateRange,
  DayClickEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayPickerProps,
  DayTouchEventHandler,
  Formatters,
  Labels,
  ModifierClassNames,
  ModifierMatchers,
  ModifierStyles,
  MonthChangeEventHandler,
  SelectEventHandler,
  SelectMode,
  SelectMultipleEventHandler,
  Styles,
  WeekNumberClickEventHandler
} from '../../types';
import { RangeSelectionHandler } from '../useSelection/useSelectRange';
import { defaultClassNames } from './defaultClassNames';
import * as formatters from './formatters';
import * as labels from './labels';
import { getWeekdays } from './utils/getWeekdays';
import { parseFromToProps } from './utils/parseFromToProps';

/**
 * Represent the value of the `DayPickerContext`.
 */
export interface DayPickerContextValue {
  captionLayout: CaptionLayout;
  classNames: ClassNames;
  components: Components;
  defaultMonth?: Date;
  defaultSelected?: Date | Date[] | DateRange;
  dir?: string;
  disableNavigation?: boolean;
  fixedWeeks?: boolean;
  formatters: Formatters;
  fromDate?: Date;
  labels: Labels;
  locale: Locale;
  hideHead?: boolean;
  mode: SelectMode;
  modifierClassNames: ModifierClassNames;
  modifierPrefix: string;
  modifiers: ModifierMatchers;
  modifierStyles?: ModifierStyles;
  /** This is the `month` from the initial props - use `useNavigation` hook for getting the current month. */
  month?: Date;
  numberOfMonths: number;
  onDayClick?: DayClickEventHandler;
  onDayKeyUp?: DayKeyboardEventHandler;
  onDayMouseEnter?: DayMouseEventHandler;
  onDayMouseLeave?: DayMouseEventHandler;
  onDayTouchCancel?: DayTouchEventHandler;
  onDayTouchEnd?: DayTouchEventHandler;
  onDayTouchMove?: DayTouchEventHandler;
  onDayTouchStart?: DayTouchEventHandler;
  onMonthChange?: MonthChangeEventHandler;
  onSelect?: SelectEventHandler;
  onSelectMultiple?: SelectMultipleEventHandler;
  onSelectRange?: RangeSelectionHandler;
  onWeekNumberClick?: WeekNumberClickEventHandler;
  required?: boolean;
  showOutsideDays?: boolean;
  showWeekNumber?: boolean;
  styles: Styles;
  /** Limit the navigation up to this date. Includes a parsed value from the `toMonth` and `toYear` props. */
  toDate?: Date;
  /** The today’s date used for calculations. */
  today: Date;
  /** The weekdays used for the head */
  weekdays: Date[];
}

/**
 * The DayPickerContext is a context to share props and settings within the
 * internal components. It set the defaults values, parses some props, and
 * perform one-time calculation required to render the days.
 */
export const DayPickerContext = React.createContext<
  DayPickerContextValue | undefined
>(undefined);

/**
 * The provider for the [[DayPickerContext]]. Must wrap the DayPicker’s root.
 */
export const DayPickerProvider = ({
  initialProps,
  children
}: {
  initialProps: DayPickerProps;
  children: React.ReactNode;
}): JSX.Element => {
  const { fromDate, toDate } = parseFromToProps(initialProps);
  const locale = initialProps.locale || english;
  const numberOfMonths = initialProps.numberOfMonths ?? 1;
  const today = initialProps.today ?? new Date();
  const month = initialProps.month;
  const weekdays = getWeekdays(locale);

  // Default selection mode. If using `selected` prop, it is uncontrolled
  let mode = initialProps.mode ?? 'single';
  if (initialProps.selected) mode = 'uncontrolled';

  // Default caption layout. If calendar navigation is unlimited it must be
  // always `buttons` as we cannot display infinite options in the dropdown.
  let captionLayout = initialProps.captionLayout ?? 'buttons';
  if (!fromDate && !toDate) captionLayout = 'buttons';

  // Set defaults from modifiers shortcuts props
  const modifiers = initialProps.modifiers || {};
  if (initialProps.selected) modifiers.selected = initialProps.selected;
  if (initialProps.hidden) modifiers.hidden = initialProps.hidden;

  modifiers.disabled = [];
  if (initialProps.disabled) {
    if (Array.isArray(initialProps.disabled))
      modifiers.disabled = [...initialProps.disabled];
    else modifiers.disabled = [initialProps.disabled];
  }
  // Disable days before/after from/toDate
  if (fromDate) modifiers.disabled.push({ before: fromDate });
  if (toDate) modifiers.disabled.push({ after: toDate });

  const context: DayPickerContextValue = {
    ...initialProps,
    modifierPrefix: 'rdp-day_',
    numberOfMonths,
    fromDate,
    toDate,
    captionLayout,
    mode,
    month,
    today,
    locale,
    weekdays,
    modifierClassNames: initialProps.modifierClassNames ?? {},
    styles: initialProps.styles ?? {},
    modifiers,
    classNames: {
      ...defaultClassNames,
      ...initialProps.classNames
    },
    formatters: {
      ...formatters,
      ...initialProps.formatters
    },
    labels: {
      ...labels,
      ...initialProps.labels
    },
    components: {
      Day: Day,
      Dropdown: Dropdown,
      Head: Head,
      Row: Row,
      WeekNumber: WeekNumber,
      ...initialProps.components
    }
  };

  return (
    <DayPickerContext.Provider value={context}>
      {children}
    </DayPickerContext.Provider>
  );
};
