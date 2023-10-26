import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';

/** Return the default ARIA label for the month grid. */
export function labelGrid(month: Date, options?: FormatOptions) {
  return format(month, 'LLLL y', options);
}
