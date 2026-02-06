import { DateLib, type DateLibOptions } from "../classes/DateLib.js";

/**
 * Formats the caption of the month.
 *
 * @defaultValue Locale-specific month/year order (e.g., "November 2022").
 * @param month The date representing the month.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted caption as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatCaption(
  month: Date,
  options?: DateLibOptions,
  dateLib?: DateLib,
) {
  const lib = dateLib ?? new DateLib(options);
  return lib.formatMonthYear(month);
}
