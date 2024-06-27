import { dateLib as defaultDateLib } from "../lib/index.js"
import type { FormatOptions } from "../lib/dateLib.js"
import type { DateLib } from "../types/index.js"

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
