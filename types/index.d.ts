// TypeScript Version: 2.2
import * as React from 'react';

declare namespace DayPicker {
  interface LocaleUtils {
    formatDay(day: Date, locale: string): string;
    formatMonthTitle(month: Date, locale: string): string;
    formatWeekdayLong(weekday: number, locale: string): string;
    formatWeekdayShort(weekday: number, locale: string): string;
    getFirstDayOfWeek(locale: string): number;
    getMonths(
      locale: string
    ): [
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
  }

  interface DateUtils {
    addDayToRange(day: Date, range: RangeModifier): RangeModifier;
    addMonths(d: Date, n: number): Date;
    clone(d: Date): Date;
    isDayAfter(day1: Date, day2: Date): boolean;
    isDayBefore(day1: Date, day2: Date): boolean;
    isDayBetween(day: Date, begin: Date, end: Date): boolean;
    isDayInRange(day: Date, range: RangeModifier): boolean;
    isFutureDay(day: Date): boolean;
    isPastDay(day: Date): boolean;
    isSameDay(day1: Date, day2: Date): boolean;
  }

  interface ModifiersUtils {
    dayMatchesModifier(day: Date, modifier?: Modifier | Modifier[]): boolean;
    getModifiersForDay(
      day: Date,
      modifiers: Record<string, Modifier | Modifier[]>
    ): string[];
  }

  interface CaptionElementProps {
    date: Date;
    classNames: ClassNames;
    localeUtils: LocaleUtils;
    locale: string;
    months: undefined;
    onClick?: React.MouseEventHandler<HTMLElement>;
  }

  interface NavbarElementProps {
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

  interface WeekdayElementProps {
    weekday: number;
    className: string;
    localeUtils: LocaleUtils;
    locale: string;
  }

  interface ClassNames {
    container: string;
    wrapper: string;
    interactionDisabled: string;
    navBar: string;
    navButtonPrev: string;
    navButtonNext: string;
    navButtonInteractionDisabled: string;

    month: string;
    caption: string;
    weekdays: string;
    weekdaysRow: string;
    weekday: string;
    body: string;
    week: string;
    day: string;

    today: string;
    selected: string;
    disabled: string;
    outside: string;
  }

  interface RangeModifier {
    from: Date;
    to: Date;
  }
  interface BeforeModifier {
    before: Date;
  }
  interface AfterModifier {
    after: Date;
  }
  interface BeforeAfterModifier {
    after: Date;
    before: Date;
  }
  interface DaysOfWeekModifier {
    daysOfWeek: number[];
  }
  type FunctionModifier = (date: Date) => boolean;
  type Modifier =
    | Date
    | RangeModifier
    | BeforeModifier
    | AfterModifier
    | BeforeAfterModifier
    | DaysOfWeekModifier
    | FunctionModifier;

  interface Modifiers {
    today: Modifier | Modifier[];
    outside: Modifier | Modifier[];
    [other: string]: Modifier | Modifier[] | undefined;
  }

  interface DayModifiers {
    today: boolean | undefined;
    outside: boolean | undefined;
    [other: string]: boolean | undefined;
  }

  interface Props {
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
  const VERSION: string;
  const LocaleUtils: DayPicker.LocaleUtils;
  const DateUtils: DayPicker.DateUtils;
  const ModifiersUtils: DayPicker.ModifiersUtils;
}

declare class DayPicker extends React.Component<DayPicker.Props, never> {
  showMonth(month: Date): void;

  showPreviousMonth(): void;

  showNextMonth(): void;

  showPreviousYear(): void;

  showNextYear(): void;
}

export = DayPicker;
