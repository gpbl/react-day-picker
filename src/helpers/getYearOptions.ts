import type { DateLib } from "../classes/DateLib.js";
import { DropdownOption } from "../components/Dropdown.js";
import type { Formatters } from "../types/index.js";

/** Return the years to show in the dropdown. */
export function getYearOptions(
  navStart: Date | undefined,
  navEnd: Date | undefined,
  formatters: Pick<Formatters, "formatYearDropdown">,
  dateLib: DateLib
): DropdownOption[] | undefined {
  if (!navStart) return undefined;
  if (!navEnd) return undefined;
  const { startOfYear, endOfYear, addYears, getYear, isBefore, isSameYear } =
    dateLib;
  const firstNavYear = startOfYear(navStart);
  const lastNavYear = endOfYear(navEnd);
  const years: Date[] = [];

  let year = firstNavYear;
  while (isBefore(year, lastNavYear) || isSameYear(year, lastNavYear)) {
    years.push(year);
    year = addYears(year, 1);
  }

  return years.map((year) => {
    const label = formatters.formatYearDropdown(year, dateLib);
    return {
      value: getYear(year),
      label,
      disabled: false
    };
  });
}
