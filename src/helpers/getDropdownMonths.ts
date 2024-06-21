import { addMonths } from "date-fns/addMonths";
import { isBefore } from "date-fns/isBefore";
import { startOfMonth } from "date-fns/startOfMonth";

import { DropdownOption } from "../components/Dropdown";
import { PropsContextValue } from "../contexts/props";

/** Return the months to show in the dropdown. */
export function getDropdownMonths(
  displayMonth: Date,
  props: Pick<
    PropsContextValue,
    "formatters" | "locale" | "startMonth" | "endMonth"
  >
): DropdownOption[] | undefined {
  const { startMonth, endMonth } = props;

  if (!startMonth) return undefined;
  if (!endMonth) return undefined;

  const year = displayMonth.getFullYear();

  const navStartMonth = startOfMonth(startMonth);
  const navEndMonth = startOfMonth(endMonth);

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
    const label = props.formatters.formatMonthDropdown(value, props.locale);
    const disabled =
      (startMonth && new Date(year, value) < startOfMonth(startMonth)) ||
      (endMonth && new Date(year, value) > startOfMonth(endMonth)) ||
      false;
    return { value, label, disabled };
  });

  return options;
}
