import { format } from "date-fns/format";

/**
 * Return he default ARIA label for the Weekday element.
 *
 * @category Labels
 */
export function labelWeekday(
  date: Date,
  options?: Parameters<typeof format>[2],
): string {
  return format(date, "cccc", options);
}
