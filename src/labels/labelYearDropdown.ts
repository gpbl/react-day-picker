import type { LabelOptions } from "../lib/dateLib.js";

/**
 * Return the default ARIA label for the years dropdown.
 *
 * @group Labels
 * @see http://daypicker.dev/next/docs/translation#aria-labels
 */
export function labelYearDropdown(options?: LabelOptions) {
  return "Year: ";
}
