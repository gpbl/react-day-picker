import { defaultDateLib, type DateLib } from "../classes/DateLib.js";

/**
 * Format the month number for the dropdown option label.
 *
 * @defaultValue The localized month name
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatMonthDropdown(
  month: Date,
  dateLib: DateLib = defaultDateLib
): string {
  return dateLib.format(month, "LLLL");
}
