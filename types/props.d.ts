// TypeScript Version: 2.2

import * as React from "react";
import { ClassNames, Modifier, Modifiers, DayModifiers } from "./common";
import { LocaleUtils } from "./utils";

export interface CaptionElementProps {
  date: Date;
  classNames: ClassNames;
  localeUtils: LocaleUtils;
  locale: string;
  months: undefined;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface NavbarElementProps {
  className: string;
  classNames: ClassNames;
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
}

export interface DayPickerProps {
  canChangeMonth?: boolean;
  captionElement?:
    | React.ReactElement<Partial<CaptionElementProps>>
    | React.ComponentClass<CaptionElementProps>
    | React.SFC<CaptionElementProps>;
  className?: string;
  classNames?: ClassNames;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  disabledDays?: Modifier | Modifier[];
  enableOutsideDays?: boolean;
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
  months?: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  navbarElement?:
    | React.ReactElement<Partial<NavbarElementProps>>
    | React.ComponentClass<NavbarElementProps>
    | React.SFC<NavbarElementProps>;
  numberOfMonths?: number;
  onBlur?(e: React.FocusEvent<HTMLDivElement>): void;
  onCaptionClick?(month: Date, e: React.MouseEvent<HTMLDivElement>): void;
  onDayClick?(
    day: Date,
    modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement>
  ): void;
  onDayKeyDown?(
    day: Date,
    modifiers: DayModifiers,
    e: React.KeyboardEvent<HTMLDivElement>
  ): void;
  onDayMouseEnter?(
    day: Date,
    modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement>
  ): void;
  onDayMouseLeave?(
    day: Date,
    modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement>
  ): void;
  onDayMouseDown?(
    day: Date,
    modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement>
  ): void;
  onDayMouseUp?(
    day: Date,
    modifiers: DayModifiers,
    e: React.MouseEvent<HTMLDivElement>
  ): void;
  onDayTouchEnd?(
    day: Date,
    modifiers: DayModifiers,
    e: React.TouchEvent<HTMLDivElement>
  ): void;
  onDayTouchStart?(
    day: Date,
    modifiers: DayModifiers,
    e: React.TouchEvent<HTMLDivElement>
  ): void;
  onFocus?(e: React.FocusEvent<HTMLDivElement>): void;
  onKeyDown?(e: React.KeyboardEvent<HTMLDivElement>): void;
  onMonthChange?(month: Date): void;
  onWeekClick?(
    weekNumber: number,
    days: Date[],
    e: React.MouseEvent<HTMLDivElement>
  ): void;
  pagedNavigation?: boolean;
  renderDay?(date: Date, modifiers: Modifiers): React.ReactNode;
  reverseMonths?: boolean;
  selectedDays?: Modifier | Modifier[];
  showWeekNumbers?: boolean;
  todayButton?: string;
  toMonth?: Date;
  weekdayElement?:
    | React.ReactElement<Partial<WeekdayElementProps>>
    | React.ComponentClass<WeekdayElementProps>
    | React.SFC<WeekdayElementProps>;
  weekdaysLong?: [string, string, string, string, string, string, string];
  weekdaysShort?: [string, string, string, string, string, string, string];
}

export interface DayPickerInputProps {
  value?: string;
  format: string | string[];

  dayPickerProps?: DayPickerProps;
  hideOnDayClick?: boolean;
  clickUnselectsDay?: boolean;
  // Not sure React.ComponentClass<any> is the right type for _propTypes2.default.any
  component?: any;

  classNames?: ClassNames;

  onDayChange?(e: React.FocusEvent<HTMLDivElement>): void;
  onChange?(e: React.FocusEvent<HTMLDivElement>): void;
  onClick?(e: React.FocusEvent<HTMLDivElement>): void;
  onFocus?(e: React.FocusEvent<HTMLDivElement>): void;
  onBlur?(e: React.FocusEvent<HTMLDivElement>): void;
  onKeyUp?(e: React.FocusEvent<HTMLDivElement>): void;
}
