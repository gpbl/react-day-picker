import type { DateLibOptions } from "../classes/DateLib.js";

/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelWeekNumberHeader(options?: DateLibOptions): string {
  return "Week Number";
}
