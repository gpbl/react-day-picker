import { format } from 'date-fns';

/**
 * The default ARIA label for next month button in navigation
 */
export const labelNext = (
  month: Date,
  options?: { locale?: Locale }
): string => {
  return `Go to next month: ${format(month, 'LLLL Y', options)}`;
};
