// TypeScript Version: 2.2
import * as React from 'react';

export interface LocaleUtils {
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

export interface DateUtils {
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

export interface ModifiersUtils {
    dayMatchesModifier(day: Date, modifier?: Modifier | Modifier[]): boolean;
    getModifiersForDay(
        day: Date,
        modifiers: Record<string, Modifier | Modifier[]>
    ): string[];
}

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

export interface ClassNames {
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

export interface RangeModifier {
    from: Date;
    to: Date;
}
export interface BeforeModifier {
    before: Date;
}
export interface AfterModifier {
    after: Date;
}
export interface BeforeAfterModifier {
    after: Date;
    before: Date;
}
export interface DaysOfWeekModifier {
    daysOfWeek: number[];
}
export type FunctionModifier = (date: Date) => boolean;
export type Modifier =
    | Date
    | RangeModifier
    | BeforeModifier
    | AfterModifier
    | BeforeAfterModifier
    | DaysOfWeekModifier
    | FunctionModifier;

export interface Modifiers {
    today: Modifier | Modifier[];
    outside: Modifier | Modifier[];
    [other: string]: Modifier | Modifier[] | undefined;
}

export interface DayModifiers {
    today: boolean | undefined;
    outside: boolean | undefined;
    [other: string]: boolean | undefined;
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

export const VERSION: string;
export const LocaleUtils: LocaleUtils;
export const DateUtils: DateUtils;
export const ModifiersUtils: ModifiersUtils;

export class DayPicker extends React.Component<DayPickerProps, never> {
    showMonth(month: Date): void;

    showPreviousMonth(): void;

    showNextMonth(): void;

    showPreviousYear(): void;

    showNextYear(): void;
}

export class DayPickerInput extends React.Component<DayPickerInputProps, never> {
    showDayPicker(): void;

    hideDayPicker(): void;
}
