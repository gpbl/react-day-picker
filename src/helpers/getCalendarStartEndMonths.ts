import { dateLib } from "../lib/index.js";
import type { DateLib, DayPickerProps } from "../types/index.js";

/**
 * Return the `fromMonth` and `toMonth` prop values values parsing the DayPicker
 * props.
 */
export function getCalendarStartEndMonths(
  props: Pick<
    DayPickerProps,
    | "startMonth"
    | "endMonth"
    | "today"
    | "captionLayout"
    // Deprecated:
    | "fromYear"
    | "toYear"
    | "fromMonth"
    | "toMonth"
  >,
  dateLib: DateLib
): {
  calendarStartMonth: Date | undefined;
  calendarEndMonth: Date | undefined;
} {
  let { startMonth, endMonth } = props;

  const {
    startOfYear,
    startOfDay,
    startOfMonth,
    endOfMonth,
    addYears,
    endOfYear,
    Date
  } = dateLib;

  // Handle deprecated code
  const { fromYear, toYear, fromMonth, toMonth } = props;
  if (!startMonth && fromMonth) {
    startMonth = fromMonth;
  }
  if (!startMonth && fromYear) {
    startMonth = new Date(fromYear, 0, 1);
  }
  if (!endMonth && toMonth) {
    endMonth = toMonth;
  }
  if (!endMonth && toYear) {
    endMonth = new Date(toYear, 11, 31);
  }

  const hasDropdowns = props.captionLayout?.startsWith("dropdown");
  if (startMonth) {
    startMonth = startOfMonth(startMonth);
  } else if (fromYear) {
    startMonth = new Date(fromYear, 0, 1);
  } else if (!startMonth && hasDropdowns) {
    startMonth = startOfYear(addYears(props.today ?? new Date(), -100));
  }
  if (endMonth) {
    endMonth = endOfMonth(endMonth);
  } else if (toYear) {
    endMonth = new Date(toYear, 11, 31);
  } else if (!endMonth && hasDropdowns) {
    endMonth = endOfYear(props.today ?? new Date());
  }
  return {
    calendarStartMonth: startMonth ? startOfDay(startMonth) : startMonth,
    calendarEndMonth: endMonth ? startOfDay(endMonth) : endMonth
  };
}
