import type { Month } from "date-fns";
import { enUS } from "date-fns/locale/en-US";

/**
 * The default formatter for the month dropdown value.
 *
 * @group Formatters
 */
export function formatMonthDropdown(
  monthNumber: number,
  locale = enUS
): string {
  return locale.localize?.month(monthNumber as Month) ?? monthNumber.toString();
}
