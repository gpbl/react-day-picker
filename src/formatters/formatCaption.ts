import { FormatOptions, dateLib as defaultDateLib } from "../lib";
import type { DateLib } from "../types";

/**
 * The default formatter for the caption element.
 *
 * @group Formatters
 */
export function formatCaption(
  month: Date,
  options?: FormatOptions,
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
