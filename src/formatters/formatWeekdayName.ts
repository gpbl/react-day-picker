import { dateLib as defaultDateLib } from "../lib";
import type { FormatOptions } from "../lib/dateLib";
import type { DateLib } from "../types";

/**
 * The default formatter for the name of the weekday.
 *
 * @group Formatters
 */
export function formatWeekdayName(
  weekday: Date,
  options?: FormatOptions,
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(weekday, "cccccc", options);
}
