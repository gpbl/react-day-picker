import type { DateLib } from "../classes/DateLib.js";
import {
  createDateAdapter,
  type DateAdapter,
} from "../internal/dateAdapter.js";
import type { DayPickerProps } from "../types/index.js";

/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @param dateAdapter Internal date boundary used for range comparisons.
 * @returns An array of dates representing the months to display.
 */
export function getDisplayMonths(
  firstDisplayedMonth: Date,
  calendarEndMonth: Date | undefined,
  props: Pick<DayPickerProps, "numberOfMonths">,
  dateLib: DateLib,
  dateAdapter: DateAdapter<Date> = createDateAdapter(dateLib),
): Date[] {
  const { numberOfMonths = 1 } = props;
  const months: Date[] = [];
  for (let i = 0; i < numberOfMonths; i++) {
    const month = dateLib.addMonths(firstDisplayedMonth, i);
    if (calendarEndMonth && dateAdapter.compare(month, calendarEndMonth) > 0) {
      break;
    }
    months.push(month);
  }
  return months;
}
