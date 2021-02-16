import { format } from 'date-fns';

export function formatYearCaption(
  year: Date,
  options?: { locale?: Locale }
): string {
  return format(year, 'yyyy', options);
}
