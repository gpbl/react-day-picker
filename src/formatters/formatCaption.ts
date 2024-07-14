import { FormatOptions, dateLib as defaultDateLib } from "../lib/index.js";
import type { DateLib } from "../types/index.js";

/**
 * The default formatter for the caption element. As default, it returns the
 * month and year.
 *
 * @group Formatters
 * @see https://daypicker.dev/next/docs/translation#custom-formatters
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
