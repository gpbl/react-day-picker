import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';

/** The default formatter for the day grid cell element. */
export function formatDay(date: Date, options?: FormatOptions) {
  return format(date, 'd', options);
}
