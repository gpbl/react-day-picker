import { dateLib as defaultDateLib } from "../lib";
import type { FormatOptions } from "../lib/dateLib";
import { DateLib } from "../types";

/**
 * Return an ARIA label for the month grid, that will be announced when entering
 * the grid.
 *
 * @group Labels
 */
export function labelGrid(
  date: Date,
  options?: FormatOptions,
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(date, "LLLL y", options);
}

/**
 * @deprecated Use {@link labelGrid} instead.
 * @protected
 */
export const labelCaption = labelGrid;
