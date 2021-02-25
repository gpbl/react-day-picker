import { format } from 'date-fns';

/**
 * The default ARIA label for previous month button in navigation
 */
export const labelPrev = (
  month: Date,
  options?: { locale?: Locale }
): string => {
  return `Go to previous month: ${format(month, 'LLLL Y', options)}`;
};
