import { DropdownOption } from "../components/Dropdown.js";
import type { DateLib } from "../lib/dateLib.js";
import type { Formatters } from "../types/index.js";

/** Return the months to show in the dropdown. */
export function getMonthOptions(
  displayMonth: Date,
  navStart: Date | undefined,
  navEnd: Date | undefined,
  formatters: Pick<Formatters, "formatMonthDropdown">,
  dateLib: DateLib
): DropdownOption[] | undefined {
  if (!navStart) return undefined;
  if (!navEnd) return undefined;

  const { addMonths, startOfMonth, isBefore } = dateLib;
  const year = displayMonth.getFullYear();

  const months: number[] = [];
  let month = navStart;
  while (months.length < 12 && isBefore(month, addMonths(navEnd, 1))) {
    months.push(month.getMonth());
    month = addMonths(month, 1);
  }
  const sortedMonths = months.sort((a, b) => {
    return a - b;
  });
  const options = sortedMonths.map((value) => {
    const label = formatters.formatMonthDropdown(value, dateLib.locale);
    const month = dateLib.Date
      ? new dateLib.Date(year, value)
      : new Date(year, value);
    const disabled =
      (navStart && month < startOfMonth(navStart)) ||
      (navEnd && month > startOfMonth(navEnd)) ||
      false;
    return { value, label, disabled };
  });

  return options;
}
