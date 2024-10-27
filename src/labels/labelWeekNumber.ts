import type { DateLibOptions } from "../classes/DateLib.js";

/**
 * The ARIA label for the week number cell (the first cell in the row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelWeekNumber(
  weekNumber: number,
  options?: DateLibOptions
): string {
  return `Week ${weekNumber}`;
}
