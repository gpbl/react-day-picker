import type { FormatOptions } from "date-fns";

import { dateLib as defaultDateLib } from "../lib/index.js";
import type { DateLib } from "../types/index.js";

/**
 * Return the default ARIA label for the month grid.
 *
 * @group Labels
 */
export function labelGrid(
  month: Date,
  options?: FormatOptions,
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(month, "LLLL y", options);
}
