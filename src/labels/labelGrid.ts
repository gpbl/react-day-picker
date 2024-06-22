import type { format } from "../lib/dateLib";
import { dateLib as defaultDateLib } from "../lib/dateLib";
import type { DateLib } from "../types";

/**
 * Return the default ARIA label for the month grid.
 *
 * @group Labels
 */
export function labelGrid(
  month: Date,
  options?: Parameters<typeof format>[2],
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(month, "LLLL y", options);
}
