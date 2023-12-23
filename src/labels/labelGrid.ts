import { type FormatOptions, format } from 'date-fns';

/** Return the default ARIA label for the month grid. */
export function labelGrid(month: Date, options?: FormatOptions) {
  return format(month, 'LLLL y', options);
}
