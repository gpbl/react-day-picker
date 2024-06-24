import type { FormatOptions } from "../lib/dateLib";

/**
 * Return the default ARIA label for the week number element.
 *
 * @group Labels
 */
export function labelWeekNumber(
  weekNumber: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: FormatOptions
): string {
  return `Week ${weekNumber}`;
}
