import type { format } from "../lib/dateLib";
import { dateLib as defaultDateLib } from "../lib/dateLib";
import type { DateLib } from "../types";

/**
 * Return he default ARIA label for the Weekday element.
 *
 * @group Labels
 */
export function labelWeekday(
  date: Date,
  options?: Parameters<typeof format>[2],
  dateLib: DateLib = defaultDateLib
): string {
  return dateLib.format(date, "cccc", options);
}
