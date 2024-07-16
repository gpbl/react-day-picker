import type { LabelOptions } from "../lib/dateLib.js";

/**
 * The ARIA label for the week number cell (the first cell in the row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @group Labels
 * @see http://daypicker.dev/next/docs/translation#aria-labels
 */
export function labelWeekNumber(
  weekNumber: number,
  options?: LabelOptions
): string {
  return `Week ${weekNumber}`;
}
