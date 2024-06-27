import type { CalendarContextValue } from "../contexts";

/**
 * Return an ARIA label for the navigation toolbar, that will be announced when
 * entering it.
 *
 * @group Labels
 */
export function labelNav(
  calendar: Pick<
    CalendarContextValue,
    "firstMonth" | "lastMonth" | "nextMonth" | "previousMonth"
  >
): string {
  return "";
}
