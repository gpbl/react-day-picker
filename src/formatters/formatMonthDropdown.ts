import { enUS } from "date-fns/locale/en-US";
import type { Month } from "date-fns/types";

/**
 * The default formatter for the month dropdown value.
 *
 * @category Formatters
 */
export function formatMonthDropdown(monthNumber: Month, locale = enUS): string {
  return locale.localize?.month(monthNumber) ?? monthNumber.toString();
}
