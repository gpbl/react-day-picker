import { format } from "date-fns/format";

/**
 * The default formatter for the caption element.
 *
 * @group Formatters
 */
export function formatCaption(
  month: Date,
  options?: Parameters<typeof format>[2]
) {
  return format(month, "LLLL y", options);
}

/**
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */
export const formatMonthCaption = formatCaption;
