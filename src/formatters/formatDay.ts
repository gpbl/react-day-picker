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
  dateLib?: DateLib
) {
  return (dateLib ?? new DateLib(options)).format(date, "d");
}
