import * as dateFns from 'date-fns';

export type DateFormatter = (
  date: Date,
  options?: { locale?: dateFns.Locale }
) => string;
