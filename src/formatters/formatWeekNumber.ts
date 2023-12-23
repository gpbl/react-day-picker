import type { FormatOptions } from 'date-fns';

/** The default formatter for the week numbers. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function formatWeekNumber(weekNumber: number, _options?: FormatOptions) {
  return `${weekNumber}`;
}
