import { enUS } from 'date-fns/locale';

/** The default formatter for the month dropdown value. */
export function formatMonthDropdown(
  monthNumber: number,
  locale = enUS
): string {
  return locale.localize?.month(monthNumber) ?? monthNumber.toString();
}
