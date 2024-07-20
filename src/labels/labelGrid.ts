import type { LabelOptions } from "../lib/dateLib.js";
import { dateLib as defaultDateLib } from "../lib/index.js";
import { DateLib } from "../types/index.js";

/**
 * Return an ARIA label for the month grid, that will be announced when entering
 * the grid.
 *
 * @defaultValue `LLLL y` (e.g. "November 2022")
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelGrid(
  date: Date,
  options?: LabelOptions,
  /** @ignore */
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(date, "LLLL y", options);
}

/**
 * @deprecated Use {@link labelGrid} instead.
 * @protected
 */
export const labelCaption = labelGrid;
