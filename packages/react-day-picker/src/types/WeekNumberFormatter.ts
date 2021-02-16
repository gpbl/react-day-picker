import { Locale } from 'date-fns';

export type WeekNumberFormatter = (
  weekNumber: number,
  options?: { locale?: Locale }
) => string;
