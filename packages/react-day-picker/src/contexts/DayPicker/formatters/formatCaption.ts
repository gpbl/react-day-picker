import type { Locale } from 'date-fns';
import format from 'date-fns/format';

/**
 * The default formatter for the caption.
 */
export function formatCaption(
  month: Date,
  options?: { locale?: Locale }
): string {
  return format(month, 'LLLL y', options);
}
