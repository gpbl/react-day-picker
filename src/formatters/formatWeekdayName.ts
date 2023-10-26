import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';

/** The default formatter for the name of the weekday. */
export function formatWeekdayName(weekday: Date, options?: FormatOptions) {
  return format(weekday, 'cccccc', options);
}
