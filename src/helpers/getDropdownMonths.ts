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
    "fromMonth" | "toMonth" | "locale"
  > & {
    formatters: Pick<Formatters, "formatMonthDropdown">;
  },
  year?: number | undefined
): DropdownOption[] | undefined {
  if (!props.fromMonth) return undefined;
  if (!props.toMonth) return undefined;
  const navStartMonth = startOfMonth(props.fromMonth);
  const navEndMonth = startOfMonth(props.toMonth);

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
        props.fromMonth &&
        new Date(year, value) < startOfMonth(props.fromMonth)) ||
      (year &&
        props.toMonth &&
        new Date(year, value) > startOfMonth(props.toMonth)) ||
      false;
    return { value, label, disabled };
  });

  return options;
}
