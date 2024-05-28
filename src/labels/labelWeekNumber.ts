import type { format } from "date-fns/format";

/**
 * Return the default ARIA label for the week number element.
 *
 * @group Labels
 */
export function labelWeekNumber(
  weekNumber: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: Parameters<typeof format>[2]
): string {
  return `Week ${weekNumber}`;
}
