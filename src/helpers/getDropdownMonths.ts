import type { Month } from "date-fns";
import { addMonths } from "date-fns/addMonths";
import { isBefore } from "date-fns/isBefore";
import { startOfMonth } from "date-fns/startOfMonth";

import { DropdownOption } from "../components/Dropdown";
import { PropsContext } from "../contexts/props";
import { Formatters, Mode } from "../types";

/** Return the months to show in the dropdown. */
export function getDropdownMonths(
  props: Pick<
    PropsContext<Mode, boolean>,
    "startMonth" | "endMonth" | "locale"
  > & {
    formatters: Pick<Formatters, "formatMonthDropdown">;
  },
  year?: number | undefined
): DropdownOption[] | undefined {
  if (!props.startMonth) return undefined;
  if (!props.endMonth) return undefined;
  const navStartMonth = startOfMonth(props.startMonth);
  const navEndMonth = startOfMonth(props.endMonth);

  const months: number[] = [];
  let month = navStartMonth;
  while (months.length < 12 && isBefore(month, addMonths(navEndMonth, 1))) {
    months.push(month.getMonth());
    month = addMonths(month, 1);
  }
  const sortedMonths = months.sort((a, b) => {
    return a - b;
  });
  const options = sortedMonths.map((value) => {
    const label = props.formatters.formatMonthDropdown(
      value as Month,
      props.locale
    );
    const disabled =
      (year &&
        props.startMonth &&
        new Date(year, value) < startOfMonth(props.startMonth)) ||
      (year &&
        props.endMonth &&
        new Date(year, value) > startOfMonth(props.endMonth)) ||
      false;
    return { value, label, disabled };
  });

  return options;
}
