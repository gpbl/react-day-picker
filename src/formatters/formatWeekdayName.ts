import { DateLib, type DateLibOptions } from "../classes/DateLib.js";

/**
 * Format the weekday name to be displayed in the weekdays header.
 *
 * @defaultValue `cccccc` (e.g. "Mo" for Monday)
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatWeekdayName(
  weekday: Date,
  options?: DateLibOptions,
  /** @ignore */
  dateLib: DateLib = new DateLib(options)
) {
  return dateLib.format(weekday, "cccccc");
}
