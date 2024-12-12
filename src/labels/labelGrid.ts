import { DateLib, type DateLibOptions } from "../classes/DateLib.js";

/**
 * The ARIA label for the month grid, that will be announced when entering the
 * grid.
 *
 * @defaultValue `LLLL y` (e.g. "November 2022")
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelGrid(
  date: Date,
  options?: DateLibOptions,
  dateLib?: DateLib
) {
  return (dateLib ?? new DateLib(options)).format(date, "LLLL y");
}

/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */
export const labelCaption = labelGrid;
