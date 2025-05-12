import type { DateLib } from "../classes/DateLib.js";
import { DropdownOption } from "../components/Dropdown.js";
import type { Formatters } from "../types/index.js";

/**
 * Returns the years to display in the dropdown.
 *
 * This function generates a list of years between the navigation start and end
 * dates, formatted using the provided formatter.
 *
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the year labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the years, or `undefined`
 *   if `navStart` or `navEnd` is not provided.
 */
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
