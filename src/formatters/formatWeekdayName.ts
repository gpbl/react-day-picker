import { format } from "date-fns/format";

/**
 * The default formatter for the name of the weekday.
 *
 * @group Formatters
 */
export function formatWeekdayName(
  weekday: Date,
  options?: Parameters<typeof format>[2]
) {
  return format(weekday, "cccccc", options);
}
