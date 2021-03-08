import { Locale } from 'date-fns';

/** Represents a function to format a date. */
export type DateFormatter = (
  date: Date,
  options?: { locale?: Locale }
) => React.ReactNode;
