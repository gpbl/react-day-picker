import type { UseCalendar } from "../contexts/useCalendar.js";

/**
 * Return an ARIA label for the navigation toolbar, that will be announced when
 * entering it.
 *
 * @group Labels
 */
export function labelNav(
  calendar: Pick<
    UseCalendar,
    "firstMonth" | "lastMonth" | "nextMonth" | "previousMonth"
  >
): string {
  return "";
}
