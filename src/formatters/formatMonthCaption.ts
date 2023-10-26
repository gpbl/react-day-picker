import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';

/** The default formatter for the month caption. */
export function formatMonthCaption(month: Date, options?: FormatOptions) {
  return format(month, 'LLLL yyyy', options);
}
