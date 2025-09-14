import { DateLib, type DateLibOptions } from "../classes/DateLib.js";

/**
 * Generates the ARIA label for the month grid, which is announced when entering
 * the grid.
 *
 * @defaultValue `LLLL y` (e.g., "November 2022").
 * @param date - The date representing the month.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the month grid.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelGrid(
  date: Date,
  options?: DateLibOptions,
  dateLib?: DateLib,
) {
  return (dateLib ?? new DateLib(options)).format(date, "LLLL y");
}

/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */
export const labelCaption = labelGrid;
