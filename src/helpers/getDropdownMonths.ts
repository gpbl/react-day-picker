import type { Month } from "date-fns";
import { addMonths } from "date-fns/addMonths";
import { isBefore } from "date-fns/isBefore";
import { startOfMonth } from "date-fns/startOfMonth";

import { DropdownOption } from "../components/Dropdown";
import { PropsContext } from "../contexts/props";
import { Formatters, Mode } from "../types";

/** Return the months to show in the dropdown. */
export function getDropdownMonths(
  props: Pick<PropsContext<Mode>, "fromDate" | "toDate" | "locale"> & {
    formatters: Pick<Formatters, "formatMonthDropdown">;
  }
): DropdownOption[] | undefined {
  if (!props.fromDate) return undefined;
  if (!props.toDate) return undefined;
  const navStartMonth = startOfMonth(props.fromDate);
  const navEndMonth = startOfMonth(props.toDate);

  const months: Month[] = [];
  let month = navStartMonth;
  while (months.length < 12 && isBefore(month, addMonths(navEndMonth, 1))) {
    months.push(month.getMonth() as Month);
    month = addMonths(month, 1);
  }
  const sortedMonths = months.sort((a, b) => {
    return a - b;
  });
  const options = sortedMonths.map((m) => {
    const label = props.formatters.formatMonthDropdown(m, props.locale);
    const option: [number, string] = [m, label];
    return option;
  });
  return options;
}
