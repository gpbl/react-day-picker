import * as dateFns from 'date-fns';

export type WeekdayFormatter = (
  weekday: Date,
  options?: { locale?: dateFns.Locale },
  format?: string
) => string;
