import { format } from 'date-fns/format';

/**
 * The default formatter for the day grid cell element.
 *
 * @category Formatters
 */
export function formatDay(date: Date, options?: Parameters<typeof format>[2]) {
  return format(date, 'd', options);
}
