import type { FormatOptions } from 'date-fns';

/** Return the default ARIA label for the week number element. */
export function labelWeekNumber(
  weekNumber: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options?: FormatOptions
): string {
  return `Week ${weekNumber}`;
}
