import { DateLib, type FormatOptions } from "../lib/dateLib.js";

/**
 * Format the weekday name to be displayed in the weekdays header.
 *
 * @defaultValue `cccccc` (e.g. "Mo" for Monday)
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatWeekdayName(
  weekday: Date,
  options?: FormatOptions,
  /** @ignore */
  dateLib: DateLib = DateLib.fromOptionsDefaultLocale(options)
) {
  return dateLib.format(weekday, "cccccc");
}
