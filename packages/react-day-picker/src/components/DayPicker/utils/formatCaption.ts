import { format, Locale } from 'date-fns';

export function formatCaption(
  month: Date,
  options?: { locale?: Locale }
): string {
  return format(month, 'LLLL y', options);
}
