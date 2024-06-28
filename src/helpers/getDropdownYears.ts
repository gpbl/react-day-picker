import { DropdownOption } from "../components/Dropdown.js";
import { UseProps } from "../contexts/index.js";

/** Return the years to show in the dropdown. */
export function getDropdownYears(
  displayMonth: Date,
  props: Pick<
    UseProps,
    "formatters" | "locale" | "startMonth" | "endMonth" | "dateLib"
  >
): DropdownOption[] | undefined {
  const { startMonth, endMonth } = props;
  if (!startMonth) return undefined;
  if (!endMonth) return undefined;
  const {
    startOfMonth,
    startOfYear,
    endOfYear,
    addYears,
    isBefore,
    isSameYear,
    Date
  } = props.dateLib;
  const month = displayMonth.getMonth();
  const firstNavYear = startOfYear(startMonth);
  const lastNavYear = endOfYear(endMonth);
  const years: number[] = [];

  let year = firstNavYear;
  while (isBefore(year, lastNavYear) || isSameYear(year, lastNavYear)) {
    years.push(year.getFullYear());
    year = addYears(year, 1);
  }

  return years.map((value) => {
    const disabled =
      (startMonth && new Date(value, month) < startOfMonth(startMonth)) ||
      (month && endMonth && new Date(value, month) > startOfMonth(endMonth)) ||
      false;
    const label = props.formatters.formatYearDropdown(value);
    return {
      value,
      label,
      disabled
    };
  });
}
