import type { LabelOptions } from "../lib/dateLib.js";

/**
 * Return the default ARIA label for the week number element.
 *
 * @group Labels
 */
export function labelWeekNumber(
  weekNumber: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: LabelOptions
): string {
  return `Week ${weekNumber}`;
}
