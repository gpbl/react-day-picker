import * as React from 'react';

import { Modifiers, Modifier, DayModifiers } from './Modifiers';
import { ClassNames, InputClassNames } from './ClassNames';
import { LocaleUtils } from './LocaleUtils';
import DayPickerInput from './DayPickerInput';

export interface CaptionElementProps {
  date: Date;
  classNames: ClassNames;
  localeUtils: LocaleUtils;
  locale: string;
  months?: string[];
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface NavbarElementProps {
  className: string;
  classNames: ClassNames;
  month: Date;
  previousMonth: Date;
  nextMonth: Date;
  showPreviousButton: boolean;
  showNextButton: boolean;
  onPreviousClick(callback?: () => void): void;
  onNextClick(callback?: () => void): void;
  dir?: string;
  labels: { previousMonth: string; nextMonth: string };
  localeUtils: LocaleUtils;
  locale: string;
}

export interface WeekdayElementProps {
  weekday: number;
  className: string;
  localeUtils: LocaleUtils;
  locale: string;
  weekdaysLong?: string[];
  weekdaysShort?: string[];
}

export interface DayPickerProps {
  canChangeMonth?: boolean;
  captionElement?:
    | React.ReactElement<Partial<CaptionElementProps>>
    | React.ComponentClass<CaptionElementProps>
    | React.SFC<CaptionElementProps>;
  className?: string;
  classNames?: ClassNames;
  containerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  dir?: string;
  disabledDays?: Modifier | Modifier[];
  showOutsideDays?: boolean;
  enableOutsideDaysClick?: boolean;
  firstDayOfWeek?: number;
  fixedWeeks?: boolean;
  fromMonth?: Date;
  initialMonth?: Date;
  labels?: { previousMonth: string; nextMonth: string };
  locale?: string;
  localeUtils?: LocaleUtils;
  modifiers?: Partial<Modifiers>;
  modifiersStyles?: object;
  month?: Date;
  months?: string[];
  navbarElement?:
    | React.ReactElement<Partial<NavbarElementProps>>
    | React.ComponentClass<NavbarElementProps>
    | React.SFC<NavbarElementProps>;
  numberOfMonths?: number;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onCaptionClick?: (month: Date, e: React.MouseEvent<HTMLDivElement>) => void;
  onDayClick?: (
    day: Date,
    modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
  onDayKeyDown?: (
    day: Date,
    modifiers: DayModifiers,
    e: React.KeyboardEvent<HTMLDivElement>
  ) => void;
  onDayMouseEnter?: (
    day: Date,
    modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
  onDayMouseLeave?: (
    day: Date,
    modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
  onDayMouseDown?: (
    day: Date,
    modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
  onDayMouseUp?: (
    day: Date,
    modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
  onDayTouchEnd?: (
    day: Date,
    modifiers: DayModifiers,
    e: React.TouchEvent<HTMLDivElement>
  ) => void;
  onDayTouchStart?: (
    day: Date,
    modifiers: DayModifiers,
    e: React.TouchEvent<HTMLDivElement>
  ) => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  onMonthChange?: (month: Date) => void;
  onTodayButtonClick?: (
    day: Date,
    modifiers: DayModifiers,
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  onWeekClick?: (
    weekNumber: number,
    days: Date[],
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
  onWeekMouseEnter?: (
    weekNumber: number,
    days: Date[],
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
  onWeekMouseLeave?: (
    weekNumber: number,
    days: Date[],
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
  pagedNavigation?: boolean;
  renderDay?: (date: Date, modifiers: DayModifiers) => React.ReactNode;
  renderWeek?: (
    weekNumber: number,
    week: Date[],
    month: Date
  ) => React.ReactNode;
  reverseMonths?: boolean;
  selectedDays?: Modifier | Modifier[];
  showWeekNumbers?: boolean;
  showWeekDays?: boolean;
  todayButton?: string;
  toMonth?: Date;
  weekdayElement?:
    | React.ReactElement<Partial<WeekdayElementProps>>
    | React.ComponentClass<WeekdayElementProps>
    | React.SFC<WeekdayElementProps>;
  weekdaysLong?: string[];
  weekdaysShort?: string[];
  tabIndex?: number;
}

export interface DayPickerInputProps {
  value?: string | Date;
  format?: string | string[];
  placeholder?: string;
  style?: object;

  dayPickerProps?: DayPickerProps;
  inputProps?: object;

  formatDate?: (date: Date, format: string, locale: string) => string;
  parseDate?: (str: string, format: string, locale: string) => Date | void;

  hideOnDayClick?: boolean;
  clickUnselectsDay?: boolean;
  showOverlay?: boolean;
  keepFocus?: boolean;

  component?: any;
  overlayComponent?: any;

  classNames?: InputClassNames;

  onDayChange?: (
    day: Date,
    DayModifiers: DayModifiers,
    dayPickerInput: DayPickerInput
  ) => void;
  onDayPickerHide?: () => void;
  onDayPickerShow?: () => void;
  onChange?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onClick?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onKeyUp?: (e: React.FocusEvent<HTMLDivElement>) => void;
}
