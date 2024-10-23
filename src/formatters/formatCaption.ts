import { DateLib, type DateLibOptions } from "../classes/DateLib.js";

/**
 * Format the caption of the month.
 *
 * @defaultValue `LLLL y` (e.g. "November 2022")
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
