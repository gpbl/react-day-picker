import { Locale } from 'date-fns';

/**
 * Represent a function to format the ARIA label of the week number.
 */
export type WeekNumberLabelFormatter = (
  n: number,
  options?: { locale?: Locale }
) => string;
