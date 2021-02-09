import * as DateFns from 'date-fns';

export type WeekNumberFormatter = (
  weekNumber: number,
  options?: { locale: DateFns.Locale }
) => string;
