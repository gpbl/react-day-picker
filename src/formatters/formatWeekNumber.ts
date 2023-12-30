import type { format } from 'date-fns/format';

/** The default formatter for the week numbers. */
export function formatWeekNumber(
  weekNumber: number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: Parameters<typeof format>[2]
) {
  return `${weekNumber}`;
}
