import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';

/** Return he default ARIA label for the Weekday element. */
export function labelWeekday(day: Date, options?: FormatOptions): string {
  return format(day, 'cccc', options);
}
