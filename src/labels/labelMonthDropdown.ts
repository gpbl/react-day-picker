import type { format } from 'date-fns';

/** Return the default ARIA label for the WeekNumber element. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function labelMonthDropdown(options?: Parameters<typeof format>[2]) {
  return 'Month: ';
}
