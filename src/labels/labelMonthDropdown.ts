import type { LabelOptions } from "../lib/dateLib.js";

/**
 * The ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelMonthDropdown(options?: LabelOptions) {
  return "Choose the Month";
}
