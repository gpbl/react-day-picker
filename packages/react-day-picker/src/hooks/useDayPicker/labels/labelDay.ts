import { format } from 'date-fns';

/**
 * The default ARIA label for the day button.
 */
export const labelDay = (day: Date, options?: { locale?: Locale }): string => {
  return format(day, 'PPPP', options);
};
