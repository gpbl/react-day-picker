import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';

/** The default formatter for the month dropdown value. */
export function formatMonthDropdown(month: Date, options?: FormatOptions) {
  return format(month, 'LLLL', options);
}

/** @deprecated Use {@link formatMonthDropdown} instead. */
export const formatMonthCaption = formatMonthDropdown;
