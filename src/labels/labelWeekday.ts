import { DateLib, type DateLibOptions } from "../lib/dateLib.js";

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
  /** @ignore */
  dateLib: DateLib = new DateLib(options)
): string {
  return dateLib.format(date, "cccc");
}
