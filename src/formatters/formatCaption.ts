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
  /** @ignore */
  dateLib: DateLib = new DateLib(options)
) {
  return dateLib.format(month, "LLLL y");
}

/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */
export const formatMonthCaption = formatCaption;
