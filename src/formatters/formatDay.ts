import { format } from 'date-fns';

/** The default formatter for the day grid cell element. */
export function formatDay(date: Date, options?: Parameters<typeof format>[2]) {
  return format(date, 'd', options);
}
