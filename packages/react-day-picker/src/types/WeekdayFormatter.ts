import { Locale } from 'date-fns';

export type WeekdayFormatter = (
  weekday: Date,
  options?: { locale?: Locale }
) => string;
