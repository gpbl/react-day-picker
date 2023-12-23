import { enUS } from 'date-fns/locale';
import type { Month } from 'date-fns';
/** The default formatter for the month dropdown value. */
export function formatMonthDropdown(monthNumber: Month, locale = enUS): string {
  return locale.localize?.month(monthNumber) ?? monthNumber.toString();
}
