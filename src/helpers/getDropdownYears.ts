import { addYears } from "date-fns/addYears";
import { endOfYear } from "date-fns/endOfYear";
import { isBefore } from "date-fns/isBefore";
import { isSameYear } from "date-fns/isSameYear";
import { startOfYear } from "date-fns/startOfYear";

import { DropdownOption } from "../components/Dropdown";
import type { PropsContext } from "../contexts/props";
import type { Formatters, Mode } from "../types";

/** Return the years to show in the dropdown. */
export function getDropdownYears(
  dayPicker: Pick<PropsContext<Mode>, "fromDate" | "toDate"> & {
    formatters: Pick<Formatters, "formatYearDropdown">;
  }
): DropdownOption[] | undefined {
  if (!dayPicker.fromDate) return undefined;
  if (!dayPicker.toDate) return undefined;
  const firstNavYear = startOfYear(dayPicker.fromDate);
  const lastNavYear = endOfYear(dayPicker.toDate);
  const years: number[] = [];
  let year = firstNavYear;
  while (isBefore(year, lastNavYear) || isSameYear(year, lastNavYear)) {
    years.push(year.getFullYear());
    year = addYears(year, 1);
  }
  return years.map((year) => [
    year,
    dayPicker.formatters.formatYearDropdown(year)
  ]);
}
