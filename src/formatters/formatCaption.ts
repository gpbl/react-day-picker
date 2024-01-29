import { format } from 'date-fns/format';

/**
 * The default formatter for the caption element.
 *
 * @category Formatters
 */
export function formatCaption(
  month: Date,
  options?: Parameters<typeof format>[2]
) {
  return format(month, 'LLLL y', options);
}

/**
 * @deprecated Use {@link formatCaption} instead.
 * @category Formatters
 */
export const formatMonthCaption = formatCaption;
