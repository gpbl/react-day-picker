import { Locale } from 'date-fns';

/**
 * Represent a function to format the week number.
 */
export type WeekNumberFormatter = (
  weekNumber: number,
  options?: { locale?: Locale }
) => React.ReactNode;
