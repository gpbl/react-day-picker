import { DateLib, type DateLibOptions } from "../classes/DateLib.js";

/**
 * The ARIA label for the Weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelWeekday(
  date: Date,
  options?: DateLibOptions,
  dateLib?: DateLib
): string {
  return (dateLib ?? new DateLib(options)).format(date, "cccc");
}
