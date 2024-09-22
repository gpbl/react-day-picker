import type { FormatOptions, DateLib } from "../lib/dateLib.js";
import { dateLib as defaultDateLib } from "../lib/index.js";

/**
 * Format the day date shown in the day cell.
 *
 * @defaultValue `d` (e.g. "1")
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatDay(
  date: Date,
  options?: FormatOptions,
  /** @ignore */
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(date, "d", options);
}
