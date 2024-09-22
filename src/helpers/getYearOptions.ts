import { DropdownOption } from "../components/Dropdown.js";
import type { DateLib } from "../lib/dateLib.js";
import type { Formatters } from "../types/index.js";

/** Return the years to show in the dropdown. */
export function getYearOptions(
  displayMonth: Date,
  calendarStart: Date | undefined,
  calendarEnd: Date | undefined,
  formatters: Pick<Formatters, "formatYearDropdown">,
  dateLib: DateLib
): DropdownOption[] | undefined {
  if (!calendarStart) return undefined;
  if (!calendarEnd) return undefined;
  const {
    startOfMonth,
    startOfYear,
    endOfYear,
    addYears,
    isBefore,
    isSameYear
  } = dateLib;
  const month = displayMonth.getMonth();
  const firstNavYear = startOfYear(calendarStart);
  const lastNavYear = endOfYear(calendarEnd);
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
      (calendarStart && year < startOfMonth(calendarStart)) ||
      (month && calendarEnd && year > startOfMonth(calendarEnd)) ||
      false;
    const label = formatters.formatYearDropdown(value);
    return {
      value,
      label,
      disabled
    };
  });
}
