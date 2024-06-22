import type { format } from "../lib/dateLib";
import { dateLib as defaultDateLib } from "../lib/dateLib";
import type { DateLib } from "../types";

/**
 * The default formatter for the name of the weekday.
 *
 * @group Formatters
 */
export function formatWeekdayName(
  weekday: Date,
  options?: Parameters<typeof format>[2],
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(weekday, "cccccc", options);
}
