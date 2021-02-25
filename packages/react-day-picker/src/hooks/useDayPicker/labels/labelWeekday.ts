import { format } from 'date-fns';

/**
 * The default ARIA label for the Weekday element.
 */
export const labelWeekday = (
  day: Date,
  options?: { locale?: Locale }
): string => {
  return format(day, 'ccc', options);
};
