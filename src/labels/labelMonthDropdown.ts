import type { LabelOptions } from "../lib/dateLib.js";

/**
 * Return the default ARIA label for the months dropdown element.
 *
 * @group Labels
 * @see http://daypicker.dev/next/docs/translation#aria-labels
 */
export function labelMonthDropdown(options?: LabelOptions) {
  return "Month: ";
}
