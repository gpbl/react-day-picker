import type { FormatOptions } from "../lib/dateLib.js";
import { dateLib as defaultDateLib } from "../lib/index.js";
import type { DateLib } from "../types/index.js";

/**
 * The default formatter for the day grid cell element. As default, it returns
 * the date of the day.
 *
 * @group Formatters
 * @see https://daypicker.dev/next/docs/translation#custom-formatters
 */
export function formatDay(
  date: Date,
  options?: FormatOptions,
  /** @ignore */
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(date, "d", options);
}
