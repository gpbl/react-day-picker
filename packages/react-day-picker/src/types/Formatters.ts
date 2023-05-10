import React from 'react';

/** Represents a function to format a date. */
export type DateFormatter = (
  date: Date,
  options?: { locale?: Locale }
) => React.ReactNode;

export type StringDateFormatter = (
  date: Date,
  options?: { locale?: Locale }
) => string;

/** Represent a map of formatters used to render localized content. */
export type Formatters = {
  /** Format the month in the caption when `captionLayout` is `buttons`. */
  formatCaption: DateFormatter;
  /** Format the month in the navigation dropdown. */
  formatMonthCaption: DateFormatter;
  /** Format the year in the navigation dropdown. */
  formatYearCaption: DateFormatter;
  /** Format the day in the day cell. */
  formatDay: DateFormatter;
  /** Format the week number. */
  formatWeekNumber: WeekNumberFormatter;
  /** Format the week day name in the header */
  formatWeekdayName: DateFormatter;
};

/** Represent a map of formatters used to render localized content. */
export type StringFormatters = {
  /** Format the month in the caption when `captionLayout` is `buttons`. */
  formatCaption: StringDateFormatter;
  /** Format the month in the navigation dropdown. */
  formatMonthCaption: StringDateFormatter;
  /** Format the year in the navigation dropdown. */
  formatYearCaption: StringDateFormatter;
  /** Format the day in the day cell. */
  formatDay: StringDateFormatter;
  /** Format the week number. */
  formatWeekNumber: StringWeekNumberFormatter;
  /** Format the week day name in the header */
  formatWeekdayName: StringDateFormatter;
};

/** Represent a function to format the week number. */
export type WeekNumberFormatter = (
  weekNumber: number,
  options?: { locale?: Locale }
) => React.ReactNode;

export type StringWeekNumberFormatter = (
  weekNumber: number,
  options?: { locale?: Locale }
) => React.ReactNode;
