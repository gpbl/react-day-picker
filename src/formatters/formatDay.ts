import { DateLib, type DateLibOptions } from "../classes/DateLib.js";

/**
 * Format the day date shown in the day cell.
 *
 * @defaultValue `d` (e.g. "1")
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatDay(
  date: Date,
  options?: DateLibOptions,
  /** @ignore */
  dateLib: DateLib = new DateLib(options)
) {
  return dateLib.format(date, "d");
}
