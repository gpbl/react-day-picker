import type { DateLib } from "../classes/DateLib.js";
import type { DayPickerProps } from "../types/index.js";

export function getDisplayMonths(
  firstDisplayedMonth: Date,
  calendarEndMonth: Date | undefined,
  props: Pick<DayPickerProps, "numberOfMonths">,
  dateLib: DateLib
) {
  const { numberOfMonths = 1 } = props;
  const months: Date[] = [];
  for (let i = 0; i < numberOfMonths; i++) {
    const month = dateLib.addMonths(firstDisplayedMonth, i);
    if (calendarEndMonth && month > calendarEndMonth) {
      break;
    }
    months.push(month);
  }
  return months;
}
