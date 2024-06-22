import type { format } from "../lib/dateLib";
import { dateLib as defaultDateLib } from "../lib/dateLib";
import type { DateLib } from "../types";

/**
 * The default formatter for the day grid cell element.
 *
 * @group Formatters
 */
export function formatDay(
  date: Date,
  options?: Parameters<typeof format>[2],
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(date, "d", options);
}
