import { format } from 'date-fns';

/** Return the default ARIA label for the month grid. */
export function labelGrid(month: Date, options?: Parameters<typeof format>[2]) {
  return format(month, 'LLLL y', options);
}
