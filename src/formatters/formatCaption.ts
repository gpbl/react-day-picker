import { type FormatOptions, format } from 'date-fns';

/** The default formatter for the caption element. */
export function formatCaption(month: Date, options?: FormatOptions) {
  return format(month, 'LLLL y', options);
}

/** @deprecated Use {@link formatCaption} instead. */
export const formatMonthCaption = formatCaption;
