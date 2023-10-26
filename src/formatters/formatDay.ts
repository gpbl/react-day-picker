import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';

/** The default formatter for the day grid cell element. */
export function formatDay(day: Date, options?: FormatOptions) {
  return format(day, 'd', options);
}
