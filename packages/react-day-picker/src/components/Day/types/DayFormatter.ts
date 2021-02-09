import * as DateFns from 'date-fns';

export type DayFormatter = (
  day: Date,
  options?: { locale?: DateFns.Locale }
) => string;
