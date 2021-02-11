import * as dateFns from 'date-fns';

export type WeekdayNameFormatter = (
  day: Date,
  options?: { locale?: dateFns.Locale }
) => string;
