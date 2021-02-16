import { Locale } from 'date-fns';

export type DateFormatter = (
  date: Date,
  options?: { locale?: Locale }
) => string;
