import { DateLib, type FormatOptions } from "../lib/dateLib.js";

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
  dateLib: DateLib = DateLib.fromOptionsDefaultLocale(options)
) {
  return dateLib.format(date, "d");
}
