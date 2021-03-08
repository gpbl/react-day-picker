import * as React from 'react';

import { Locale } from 'date-fns';
import {
  CaptionLayout,
  ClassNames,
  Components,
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayTouchEventHandler,
  Formatters,
  Labels,
  ModifierClassNames,
  ModifiersArray,
  ModifierStyles,
  MonthChangeEventHandler,
  Styles,
  WeekNumberClickEventHandler
} from 'types';

/**
 * Represent the value of the daypicker context.
 */
export interface ContextBase {
  captionLayout: CaptionLayout;
  classNames: Required<ClassNames>;
  components: Components;
  defaultMonth?: Date;
  dir?: string;
  disableNavigation?: boolean;
  fixedWeeks?: boolean;
  formatters: Formatters;
  fromDate?: Date;
  labels: Labels;
  locale: Locale;
  hideHead?: boolean;
  hideToday?: boolean;
  modifierClassNames: ModifierClassNames;
  modifierPrefix: string;
  modifiers: ModifiersArray;
  modifierStyles?: ModifierStyles;
  month?: Date;
  numberOfMonths: number;

  onDayClick?: DayClickEventHandler;
  onDayFocus?: DayFocusEventHandler;
  onDayBlur?: DayFocusEventHandler;
  onDayKeyDown?: DayKeyboardEventHandler;
  onDayKeyUp?: DayKeyboardEventHandler;
  onDayMouseEnter?: DayMouseEventHandler;
  onDayMouseLeave?: DayMouseEventHandler;
  onDayTouchCancel?: DayTouchEventHandler;
  onDayTouchEnd?: DayTouchEventHandler;
  onDayTouchMove?: DayTouchEventHandler;
  onDayTouchStart?: DayTouchEventHandler;
  onMonthChange?: MonthChangeEventHandler;
  onWeekNumberClick?: WeekNumberClickEventHandler;

  showOutsideDays?: boolean;
  showWeekNumber?: boolean;

  styles: Styles;

  toDate?: Date;
  today: Date;
  weekdays: Date[];
  footer?: React.ReactNode;
}
