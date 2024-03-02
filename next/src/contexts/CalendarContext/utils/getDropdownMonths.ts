import { addMonths } from "date-fns/addMonths";
import { isBefore } from "date-fns/isBefore";
import { startOfMonth } from "date-fns/startOfMonth";
import type { Month } from "date-fns";

import type { DropdownOption } from "../../../components/custom-components";
import type { Formatters, Mode } from "../../../types";
import type { DayPickerContext } from "../../DayPickerContext";

export function getDropdownMonths(
  dayPicker: Pick<DayPickerContext<Mode>, "fromDate" | "toDate" | "locale"> & {
    formatters: Pick<Formatters, "formatMonthDropdown">;
  },
): DropdownOption[] | undefined {
  if (!dayPicker.fromDate) return undefined;
  if (!dayPicker.toDate) return undefined;
  const navStartMonth = startOfMonth(dayPicker.fromDate);
  const navEndMonth = startOfMonth(dayPicker.toDate);

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
    const label = dayPicker.formatters.formatMonthDropdown(m, dayPicker.locale);
    const option: [number, string] = [m, label];
    return option;
  });
  return options;
}
