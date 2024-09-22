import {
  FormatOptions,
  dateLib as defaultDateLib,
  type DateLib
} from "../lib/index.js";

/**
 * Format the caption of the month.
 *
 * @defaultValue `LLLL y` (e.g. "November 2022")
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatCaption(
  month: Date,
  options?: FormatOptions,
  /** @ignore */
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(month, "LLLL y", options);
}

/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */
export const formatMonthCaption = formatCaption;
