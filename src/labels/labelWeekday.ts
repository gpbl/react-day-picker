import { DateLib, type LabelOptions } from "../lib/dateLib.js";

/**
 * The ARIA label for the Weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelWeekday(
  date: Date,
  options?: LabelOptions,
  /** @ignore */
  dateLib: DateLib = DateLib.fromOptionsDefaultLocale(options)
): string {
  return dateLib.format(date, "cccc");
}
