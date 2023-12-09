import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';

/** Return he default ARIA label for the Weekday element. */
export function labelWeekday(date: Date, options?: FormatOptions): string {
  return format(date, 'cccc', options);
}
