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
  props: Pick<PropsContext<Mode>, "fromMonth" | "toMonth"> & {
    formatters: Pick<Formatters, "formatYearDropdown">;
  },
  month?: number | undefined
): DropdownOption[] | undefined {
  if (!props.fromMonth) return undefined;
  if (!props.toMonth) return undefined;
  const firstNavYear = startOfYear(props.fromMonth);
  const lastNavYear = endOfYear(props.toMonth);
  const years: number[] = [];
  let year = firstNavYear;
  while (isBefore(year, lastNavYear) || isSameYear(year, lastNavYear)) {
    years.push(year.getFullYear());
    year = addYears(year, 1);
  }
  return years.map((value) => {
    const disabled =
      (month &&
        props.fromMonth &&
        new Date(value, month) < startOfMonth(props.fromMonth)) ||
      (month &&
        props.toMonth &&
        new Date(value, month) > startOfMonth(props.toMonth)) ||
      false;
    const label = props.formatters.formatYearDropdown(value);
    return {
      value,
      label,
      disabled
    };
  });
}
