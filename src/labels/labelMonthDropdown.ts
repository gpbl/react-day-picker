import type { format } from "date-fns/format";

/**
 * Return the default ARIA label for the WeekNumber element.
 *
 * @group Labels
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function labelMonthDropdown(options?: Parameters<typeof format>[2]) {
  return "Month: ";
}
