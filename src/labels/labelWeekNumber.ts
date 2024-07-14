import type { LabelOptions } from "../lib/dateLib.js";

/**
 * Return the default ARIA label for the week number element.
 *
 * @group Labels
 * @see http://daypicker.dev/next/docs/translation#aria-labels
 */
export function labelWeekNumber(
  weekNumber: number,
  options?: LabelOptions
): string {
  return `Week ${weekNumber}`;
}
