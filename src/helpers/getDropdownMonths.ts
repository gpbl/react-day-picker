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
  },
  year?: number | undefined
): DropdownOption[] | undefined {
  if (!props.fromDate) return undefined;
  if (!props.toDate) return undefined;
  const navStartMonth = startOfMonth(props.fromDate);
  const navEndMonth = startOfMonth(props.toDate);

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
        props.fromDate &&
        new Date(year, value) < startOfMonth(props.fromDate)) ||
      (year &&
        props.toDate &&
        new Date(year, value) > startOfMonth(props.toDate)) ||
      false;
    return { value, label, disabled };
  });

  return options;
}
