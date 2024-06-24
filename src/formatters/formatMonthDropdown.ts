import type { DateFnsMonth } from "../lib/dateLib";
import { enUS } from "../lib/locales";

/**
 * The default formatter for the month dropdown value.
 *
 * @group Formatters
 */
export function formatMonthDropdown(
  /** The month number to format. */
  monthNumber: number,
  /** The locale to use for formatting. */
  locale = enUS
): string {
  return (
    locale.localize?.month(monthNumber as DateFnsMonth) ??
    monthNumber.toString()
  );
}
