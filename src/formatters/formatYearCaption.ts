import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';

/** The default formatter for the Year caption. */
export function formatYearCaption(year: Date, options?: FormatOptions) {
  return format(year, 'yyyy', options);
}
