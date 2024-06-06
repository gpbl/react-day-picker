import { addYears } from "date-fns/addYears";
import { endOfYear } from "date-fns/endOfYear";
import { isBefore } from "date-fns/isBefore";
import { isSameYear } from "date-fns/isSameYear";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfYear } from "date-fns/startOfYear";

import { DropdownOption } from "../components/Dropdown";
import type { PropsContext } from "../contexts/props";
import type { Formatters, Mode } from "../types";

/** Return the years to show in the dropdown. */
export function getDropdownYears(
  props: Pick<PropsContext<Mode>, "fromDate" | "toDate"> & {
    formatters: Pick<Formatters, "formatYearDropdown">;
  },
  month?: number | undefined
): DropdownOption[] | undefined {
  if (!props.fromDate) return undefined;
  if (!props.toDate) return undefined;
  const firstNavYear = startOfYear(props.fromDate);
  const lastNavYear = endOfYear(props.toDate);
  const years: number[] = [];
  let year = firstNavYear;
  while (isBefore(year, lastNavYear) || isSameYear(year, lastNavYear)) {
    years.push(year.getFullYear());
    year = addYears(year, 1);
  }
  return years.map((value) => {
    const disabled =
      (month &&
        props.fromDate &&
        new Date(value, month) < startOfMonth(props.fromDate)) ||
      (month &&
        props.toDate &&
        new Date(value, month) > startOfMonth(props.toDate)) ||
      false;
    const label = props.formatters.formatYearDropdown(value);
    return {
      value,
      label,
      disabled
    };
  });
}
