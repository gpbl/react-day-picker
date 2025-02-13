import { defaultDateLib, type DateLib } from "../classes/DateLib.js";

/**
 * Format the years for the dropdown option label.
 *
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatYearDropdown(
  year: Date,
  dateLib: DateLib = defaultDateLib
): string {
  return dateLib.format(year, "yyyy");
}

/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */
export const formatYearCaption = formatYearDropdown;
