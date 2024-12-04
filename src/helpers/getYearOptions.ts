import type { DateLib } from "../classes/DateLib.js";
import { DropdownOption } from "../components/Dropdown.js";
import type { Formatters } from "../types/index.js";

/** Return the years to show in the dropdown. */
export function getYearOptions(
  displayMonth: Date,
  navStart: Date | undefined,
  navEnd: Date | undefined,
  formatters: Pick<Formatters, "formatYearDropdown">,
  dateLib: DateLib
): DropdownOption[] | undefined {
  if (!navStart) return undefined;
  if (!navEnd) return undefined;
  const {
    startOfMonth,
    startOfYear,
    endOfYear,
    addYears,
    isBefore,
    isSameYear
  } = dateLib;
  const month = displayMonth.getMonth();
  const firstNavYear = startOfYear(navStart);
  const lastNavYear = endOfYear(navEnd);
  const years: number[] = [];

  let year = firstNavYear;
  while (isBefore(year, lastNavYear) || isSameYear(year, lastNavYear)) {
    years.push(year.getFullYear());
    year = addYears(year, 1);
  }

  return years.map((value) => {
    const year = dateLib.Date
      ? new dateLib.Date(value, month)
      : new Date(value, month);
    const disabled =
      (navStart && year < startOfMonth(navStart)) ||
      (month && navEnd && year > startOfMonth(navEnd)) ||
      false;
    const label = formatters.formatYearDropdown(value);
    return {
      value,
      label,
      disabled
    };
  });
}
