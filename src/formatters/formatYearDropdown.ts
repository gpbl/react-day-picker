import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';

/** The default formatter for the Year caption. */
export function formatYearDropdown(year: Date, options?: FormatOptions) {
  return format(year, 'yyyy', options);
}

/** @deprecated Use `formatYearCombobox` instead. */
export const formatYearCaption = formatYearDropdown;
