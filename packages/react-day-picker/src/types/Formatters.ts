import React from 'react';

/** Represents a function to format a date. */
export type DateFormatter = (
  date: Date,
  options?: { locale?: Locale }
) => string | React.ReactNode;

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

/** Represent a function to format the week number. */
export type WeekNumberFormatter = (
  weekNumber: number,
  options?: { locale?: Locale }
) => React.ReactNode;
