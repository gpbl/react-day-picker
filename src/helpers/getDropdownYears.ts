import { addYears } from "date-fns/addYears";
import { endOfYear } from "date-fns/endOfYear";
import { isBefore } from "date-fns/isBefore";
import { isSameYear } from "date-fns/isSameYear";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfYear } from "date-fns/startOfYear";

import { DropdownOption } from "../components/Dropdown";
import { PropsContextValue } from "../contexts";

/** Return the years to show in the dropdown. */
export function getDropdownYears(
  displayMonth: Date,
  props: Pick<
    PropsContextValue,
    "formatters" | "locale" | "startMonth" | "endMonth"
  >
): DropdownOption[] | undefined {
  const { startMonth, endMonth } = props;
  if (!startMonth) return undefined;
  if (!endMonth) return undefined;

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
