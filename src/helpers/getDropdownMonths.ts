import { DropdownOption } from "../components/Dropdown.js";
import type { Locale } from "../lib/dateLib.js";
import type { DateLib, Formatters } from "../types/index.js";

/** Return the months to show in the dropdown. */
export function getDropdownMonths(
  displayMonth: Date,
  calendarStartMonth: Date | undefined,
  calendarEndMonth: Date | undefined,
  formatters: Pick<Formatters, "formatMonthDropdown">,
  locale: Locale | undefined,
  dateLib: DateLib
): DropdownOption[] | undefined {
  if (!calendarStartMonth) return undefined;
  if (!calendarEndMonth) return undefined;

  const { addMonths, startOfMonth, isBefore, Date } = dateLib;
  const year = displayMonth.getFullYear();

  const navStartMonth = startOfMonth(calendarStartMonth);
  const navEndMonth = startOfMonth(calendarEndMonth);

  const months: number[] = [];
  let month = navStartMonth;
  while (months.length < 12 && isBefore(month, addMonths(navEndMonth, 1))) {
    months.push(month.getMonth());
    month = addMonths(month, 1);
  }
  const sortedMonths = months.sort((a, b) => {
    return a - b;
  });
  const options = sortedMonths.map((value) => {
    const label = formatters.formatMonthDropdown(value, locale);
    const disabled =
      (calendarStartMonth &&
        new Date(year, value) < startOfMonth(calendarStartMonth)) ||
      (calendarEndMonth &&
        new Date(year, value) > startOfMonth(calendarEndMonth)) ||
      false;
    return { value, label, disabled };
  });

  return options;
}
