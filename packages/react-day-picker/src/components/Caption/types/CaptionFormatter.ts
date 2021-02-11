import * as dateFns from 'date-fns';

export type CaptionFormatter = (
  month: Date,
  options?: { locale?: dateFns.Locale }
) => string;
