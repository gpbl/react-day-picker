import * as React from 'react';

declare namespace ReactDayPicker {
  export interface DayPickerProps {
    // #region CLASSNAMES
    className?: string;
    /**
     * The class names for each DayPicker element.
     */
    classNames: ClassNames;
    /**
     * The class names for the day modifiers specified via `modifiers`.
     */
    modifiersClassNames?: ModifiersClassNames;
    // #endregion

    // #region STYLES
    style?: React.CSSProperties;
    /**
     * The inline styles for each DayPicker element.
     */
    styles: Styles;
    /**
     * The inline-styles for the day modifiers specified via `modifiers`.
     */
    modifiersStyles?: ModifiersStyles;
    // #endregion

    // #region MONTH SETTINGS
    /**
     * The initial month to show in the calendar.
     */
    initialMonth?: Date;
    /**
     * The number of months to show in the date picker. See also `pagedNavigation`
     * and `reverseMonths`.
     */
    numberOfMonths: number;
    /**
     * Allow navigation only after this month. See also `toMonth`.
     */
    fromMonth?: Date;
    /**
     * Allow navigation only before this month. See also `fromMonth`.
     */
    toMonth?: Date;
    /**
     * When displaying multiple months, the navigation will be paginated
     * displaying the `numberOfMonths` months at time instead of one.
     */
    pagedNavigation?: boolean;
    /**
     * Render the months in reversed order. Useful when `numberOfMonths` is
     * greater than 1, to display the most recent month first.
     */
    reverseMonths?: boolean;
    /**
     * The rendered month. Passing this props will make the component switch to controlled mode?: this means you will need to implement `onMonthChange` to enable months navigation.
     */
    month?: Date;
    // #endregion

    // #region CUSTOMIZATION PROPS
    /**
     * Display 6 weeks per months, regardless the month’s number of weeks. Outside
     * days will be always shown if setting this to `true`. See also
     * `showOutsideDays`.
     */
    fixedWeeks?: boolean;
    /**
     * Show the month caption displaying the month and the year.
     */
    showCaption?: boolean;
    /**
     * Show the month head containing the weekday names.
     */
    showHead?: boolean;
    /**
     * Show the outside days. An outside day is a day displayed in a month but
     * falling in the next or the previous month. See also
     * `enableOutsideDaysClick`.
     */
    showOutsideDays?: boolean;
    /**
     * Enable click event for outside days. See also `showOutsideDays`.
     */
    enableOutsideDaysClick?: boolean;
    /**
     * Show the week numbers.
     */
    showWeekNumber: boolean;
    // #endregion

    // #region NAVIGATION
    /**
     * Show the navigation bar. `onMonthChange` must be set.
     */
    showNavigation?: boolean;
    /**
     * Label used for the previous month button in Navigation. Set it to empty
     * string to hide the button.
     */
    prevLabel?: string;
    /**
     * Label used for the next month button in Navigation. Set it to empty string
     * to hide the button.
     */
    nextLabel?: string;
    // #endregion

    // #region MODIFIERS
    /**
     * Style the matching days as selected.
     */
    selected?: Modifier;
    /**
     * Disable the matching days. Disabled days cannot be clicked.
     */
    disabled?: Modifier;
    /**
     * Hide the matching days.
     */
    hidden?: Modifier;
    /**
     * An object of modifiers.
     */
    modifiers?: Modifiers;
    // #endregion

    // #region LOCALIZATION
    /**
     * Locale object used for localization.
     */
    locale: Locale;
    /**
     * The text direction of the calendar. Use `ltr` for left-to-right (default)
     * or `rtl` for right-to-left.
     */
    dir?: string;
    // #endregion

    // #region FORMATTERS
    /**
     * Format the month caption text.
     */
    formatCaption: CaptionFormatter;
    /**
     * Format the content of the day element.
     */
    formatDay: DayFormatter;
    /**
     * Format the weekday's name in the head element.
     */
    formatWeekdayName: WeekdayNameFormatter;
    /**
     * Format the week numbers (when `showWeekNumber` is set).
     */
    formatWeekNumber: WeekNumberFormatter;
    // #endregion

    // #region CUSTOM COMPONENTS
    /**
     * Components to extend DayPicker.
     */
    components: Components;
    // #endregion

    // #region EVENTS
    /**
     * Event handler when the user clicks on a day.
     */
    onDayClick?: DayClickEventHandler;
    /**
     * Event handler when the month changes, e.g. when using the next/prev
     * navigation buttons.
     */
    onMonthChange?: MonthChangeEventHandler;
    /**
     * Event handler when the next navigation button is clicked.
     */
    onNextClick?: MonthChangeEventHandler;
    /**
     * Event handler when the prev navigation button is clicked.
     */
    onPrevClick?: MonthChangeEventHandler;
    // #endregion
  }

  export type CaptionFormatter = (
    month: Date,
    options?: FormatOptions
  ) => string;

  export type DayFormatter = (day: Date, options?: FormatOptions) => string;

  export type WeekNumberFormatter = (
    weekNumber: number,
    options?: FormatOptions
  ) => string;

  export type WeekdayNameFormatter = (
    day: Date,
    options?: FormatOptions
  ) => string;

  export type DayClickEventHandler = (
    day: Date,
    modifiers: MatchingModifiers,
    e: React.MouseEvent
  ) => void;

  export type MonthChangeEventHandler = (
    month: Date,
    e: React.MouseEvent
  ) => void;

  export interface CaptionProps {
    month: Date;
    dayPickerProps: ReactDayPicker.DayPickerProps;
  }

  export interface ClassNames {
    /* Container element */
    container?: string;
    caption?: string;
    // Day Component
    day?: string;
    dayWrapper?: string;
    // Modifiers
    selected?: string;
    disabled?: string;
    today?: string;
    outside?: string;
    // Month Component
    month?: string;
    monthTable?: string;
    monthTbody?: string;
    months?: string;
    // Head Components
    head?: string;
    headRow?: string;
    headWeekNumber?: string;
    headWeekName?: string;
    // Navigation Component
    nav?: string;
    navPrev?: string;
    navNext?: string;
    // Week Component
    week?: string;
    weekWeeknumber?: string;
    weekDay?: string;
    // WeekNumber Component
    weekNumber?: string;
    [key: string]: string | undefined;
  }

  export interface Components {
    Caption: React.ComponentType<CaptionProps>;
    Day: React.ComponentType<DayProps>;
    Navigation: React.ComponentType<NavigationProps>;
    WeekNumber: React.ComponentType<WeekNumberProps>;
  }

  export interface DateWithModifiers {
    date: Date;
    modifiers: MatchingModifiers;
  }

  export interface DayProps {
    day: Date;
    modifiers: MatchingModifiers;
    dayPickerProps: ReactDayPicker.DayPickerProps;
  }

  export interface FormatOptions {
    locale?: Locale;
  }

  export interface HeadProps {
    locale: Locale;
    showWeekNumber: boolean;
    dayPickerProps: ReactDayPicker.DayPickerProps;
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
    | FunctionModifier
    | undefined;

  export interface Modifiers {
    disabled: Modifier | Modifier[];
    hidden: Modifier | Modifier[];
    outside: Modifier | Modifier[];
    selected?: Modifier | Modifier[];
    today: Modifier | Modifier[];
    [other: string]: Modifier | Modifier[] | undefined;
  }

  export interface ModifiersClassNames {
    [other: string]: string;
  }

  export interface ModifiersStyles {
    [other: string]: React.CSSProperties;
  }

  export type ModifierValueType = string | boolean | undefined;

  export interface MatchingModifiers {
    disabled: boolean;
    hidden: boolean;
    outside: string;
    selected: boolean | undefined;
    today: boolean;
    interactive: boolean;
    [key: string]: ModifierValueType;
  }

  export interface MonthProps {
    month: Date;
    dayPickerProps: ReactDayPicker.DayPickerProps;
  }

  export interface NavigationProps {
    dayPickerProps: ReactDayPicker.DayPickerProps;
  }

  export interface Styles {
    container?: React.CSSProperties;
    caption?: React.CSSProperties;

    // Day Component
    day?: React.CSSProperties;
    dayWrapper?: React.CSSProperties;

    // Modifiers
    selected?: React.CSSProperties;
    disabled?: React.CSSProperties;
    today?: React.CSSProperties;
    outside?: React.CSSProperties;

    // Month Component
    month?: React.CSSProperties;
    monthTable?: React.CSSProperties;
    monthTbody?: React.CSSProperties;
    months?: React.CSSProperties;

    // Head Component
    head?: React.CSSProperties;
    headRow?: React.CSSProperties;
    headWeekNumber?: React.CSSProperties;
    headWeekName?: React.CSSProperties;

    // Navigation Component
    nav?: React.CSSProperties;
    navPrev?: React.CSSProperties;
    navNext?: React.CSSProperties;

    // Week Component
    week?: React.CSSProperties;
    weekWeeknumber?: React.CSSProperties;
    weekDay?: React.CSSProperties;

    // WeekNumber Component
    weekNumber?: React.CSSProperties;
    [key: string]: React.CSSProperties | undefined;
  }

  export interface WeekProps {
    weekNumber: number;
    week: DateWithModifiers[];
    dayPickerProps: ReactDayPicker.DayPickerProps;
  }

  export interface WeekNumberProps {
    number: number;
    days: Array<Date>;
    dayPickerProps: ReactDayPicker.DayPickerProps;
  }

  export interface DayHtmlProps {
    containerProps: {
      'aria-disabled'?: boolean;
      disabled?: boolean;
      onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
      className?: string;
      style?: React.CSSProperties;
    };
    wrapperProps: {
      className?: string;
      style?: React.CSSProperties;
    };
  }

  export interface SharedHtmlProps {
    className?: string;
    style?: React.CSSProperties;
  }

  export interface CaptionHtmlProps {
    containerProps: SharedHtmlProps;
  }

  export interface NavigationHtmlProps {
    containerProps: SharedHtmlProps;
    nextProps: SharedHtmlProps;
    prevProps: SharedHtmlProps;
  }

  // #region HOOKS

  export type UseInputOptions = {
    locale: Locale;
    required: boolean;
  };
  export type useInput = (
    initialValue: Date | undefined,
    formatStr: string,
    options?: UseInputOptions
  ) => [
    Date, // current month
    Date | undefined, // selected day
    string, // input value
    {
      onDayClick: DayClickEventHandler;
      onChange: React.ChangeEventHandler<HTMLInputElement>;
      onBlur: React.FocusEventHandler<HTMLInputElement>;
      onMonthChange: MonthChangeEventHandler;
    }
  ];

  export type NavigationMonths = { nextMonth?: Date; prevMonth?: Date };

  // #endregion
}

export = ReactDayPicker;
export as namespace ReactDayPicker;
