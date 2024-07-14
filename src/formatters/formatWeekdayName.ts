import type { FormatOptions } from "../lib/dateLib.js";
import { dateLib as defaultDateLib } from "../lib/index.js";
import type { DateLib } from "../types/index.js";

/**
 * The default formatter for the name of the weekday. As default, it returns the
 * short name of the weekday (e.g. "Mo").
 *
 * @group Formatters
 * @see https://daypicker.dev/next/docs/translation#custom-formatters
 */
export function formatWeekdayName(
  weekday: Date,
  options?: FormatOptions,
  /** @ignore */
  dateLib: DateLib = defaultDateLib
) {
  return dateLib.format(weekday, "cccccc", options);
}
