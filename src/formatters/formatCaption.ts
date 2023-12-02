import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';

/** The default formatter for the caption element. */
export function formatCaption(month: Date, options?: FormatOptions) {
  return format(month, 'LLLL y', options);
}

/** @deprecated Use {@link formatCaption} instead. */
export const formatMonthCaption = formatCaption;
