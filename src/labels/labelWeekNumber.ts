import type { format } from 'date-fns';

/** Return the default ARIA label for the week number element. */
export function labelWeekNumber(
  weekNumber: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: Parameters<typeof format>[2]
): string {
  return `Week ${weekNumber}`;
}
