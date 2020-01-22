import * as dateFns from "date-fns";

/**
 * The default function used to format the caption. Use the
 * {@link DayPicker.formatCaption} prop to use another function.
 *
 * @private
 */
export function formatCaption(
  month: Date,
  formatOptions?: { locale?: dateFns.Locale }
): string {
  return dateFns.format(month, "LLLL Y", formatOptions);
}
