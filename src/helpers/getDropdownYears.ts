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
  props: Pick<PropsContext<Mode>, "startMonth" | "endMonth"> & {
    formatters: Pick<Formatters, "formatYearDropdown">;
  },
  month?: number | undefined
): DropdownOption[] | undefined {
  if (!props.startMonth) return undefined;
  if (!props.endMonth) return undefined;
  const firstNavYear = startOfYear(props.startMonth);
  const lastNavYear = endOfYear(props.endMonth);
  const years: number[] = [];
  let year = firstNavYear;
  while (isBefore(year, lastNavYear) || isSameYear(year, lastNavYear)) {
    years.push(year.getFullYear());
    year = addYears(year, 1);
  }
  return years.map((value) => {
    const disabled =
      (month &&
        props.startMonth &&
        new Date(value, month) < startOfMonth(props.startMonth)) ||
      (month &&
        props.endMonth &&
        new Date(value, month) > startOfMonth(props.endMonth)) ||
      false;
    const label = props.formatters.formatYearDropdown(value);
    return {
      value,
      label,
      disabled
    };
  });
}
