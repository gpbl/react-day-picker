import type { DateLibOptions } from "../classes/DateLib.js";

/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelYearDropdown(_options?: DateLibOptions) {
  return "Choose the Year";
}
