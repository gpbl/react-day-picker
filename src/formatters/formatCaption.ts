import { DateLib, type DateLibOptions } from "../classes/DateLib.js";

/**
 * Formats the caption of the month.
 *
 * @defaultValue `LLLL y` (e.g., "November 2022").
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
  dateLib?: DateLib
) {
  return (dateLib ?? new DateLib(options)).format(month, "LLLL y");
}

/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */
export const formatMonthCaption = formatCaption;
