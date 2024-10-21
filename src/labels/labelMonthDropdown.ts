import type { DateLibOptions } from "../lib/dateLib.js";

/**
 * The ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelMonthDropdown(options?: DateLibOptions) {
  return "Choose the Month";
}
