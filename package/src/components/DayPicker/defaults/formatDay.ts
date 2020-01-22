import * as dateFns from "date-fns";

/**
 * The default function used to format the day. Use the
 * {@link DayPicker.formatDay} prop to use another function.
 *
 * @private
 */
export function formatDay(
  day: Date,
  formatOptions?: { locale?: dateFns.Locale }
): string {
  return dateFns.format(day, "d", formatOptions);
}
