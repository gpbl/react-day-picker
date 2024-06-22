import { dateLib as defaultDateLib } from "../lib";
import type { FormatOptions } from "../lib/dateLib";
import type { DateLib } from "../types";

/**
 * The default formatter for the day grid cell element.
 *
 * @group Formatters
 */
export function formatDay(
  date: Date,
  options?: FormatOptions,
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(date, "d", options);
}
