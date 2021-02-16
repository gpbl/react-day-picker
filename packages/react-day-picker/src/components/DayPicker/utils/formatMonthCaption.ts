import { format, Locale } from 'date-fns';

/**
 * The function used to format the caption.
 */
export function formatMonthCaption(
  month: Date,
  options?: { locale?: Locale }
): string {
  return format(month, 'LLLL', options);
}
