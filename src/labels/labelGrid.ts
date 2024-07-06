import type { LabelOptions } from "../lib/dateLib.js";
import { dateLib as defaultDateLib } from "../lib/index.js";
import { DateLib } from "../types/index.js";

/**
 * Return an ARIA label for the month grid, that will be announced when entering
 * the grid.
 *
 * @group Labels
 */
export function labelGrid(
  date: Date,
  options?: LabelOptions,
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(date, "LLLL y", options);
}

/**
 * @deprecated Use {@link labelGrid} instead.
 * @protected
 */
export const labelCaption = labelGrid;
