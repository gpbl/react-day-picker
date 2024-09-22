import type { LabelOptions, DateLib } from "../lib/dateLib.js";
import { dateLib as defaultDateLib } from "../lib/index.js";

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
  dateLib: DateLib = defaultDateLib
): string {
  return dateLib.format(date, "cccc", options);
}
