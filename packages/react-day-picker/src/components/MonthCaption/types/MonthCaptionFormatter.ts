import * as dateFns from 'date-fns';

export type MonthCaptionFormatter = (
  month: Date,
  options?: { locale?: dateFns.Locale }
) => string;
