import { dateLib as defaultDateLib } from "../lib/index.js"
import type { FormatOptions } from "../lib/dateLib.js"
import type { DateLib } from "../types/index.js"

/**
 * Return he default ARIA label for the Weekday element.
 *
 * @group Labels
 */
export function labelWeekday(
  date: Date,
  options?: FormatOptions,
  dateLib: DateLib = defaultDateLib
): string {
  return dateLib.format(date, "cccc", options);
}
