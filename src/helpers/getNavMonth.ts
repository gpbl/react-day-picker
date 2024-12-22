import { TZDate } from "@date-fns/tz";

import type { DateLib } from "../classes/DateLib.js";
import type { DayPickerProps } from "../types/index.js";

/** Return the start and end months for the calendar navigation. */
export function getNavMonths(
  props: Pick<
    DayPickerProps,
    | "captionLayout"
    | "endMonth"
    | "startMonth"
    | "today"
    | "timeZone"
    // Deprecated:
    | "fromMonth"
    | "fromYear"
    | "toMonth"
    | "toYear"
  >,
  dateLib: DateLib
): [start: Date | undefined, end: Date | undefined] {
  let { startMonth, endMonth } = props;

  const {
    startOfYear,
    startOfDay,
    startOfMonth,
    endOfMonth,
    addYears,
    endOfYear
  } = dateLib;

  // Handle deprecated code
  const { fromYear, toYear, fromMonth, toMonth } = props;
  if (!startMonth && fromMonth) {
    startMonth = fromMonth;
  }
  if (!startMonth && fromYear) {
    startMonth = new dateLib.Date(fromYear, 0, 1);
  }
  if (!endMonth && toMonth) {
    endMonth = toMonth;
  }
  if (!endMonth && toYear) {
    endMonth = new dateLib.Date(toYear, 11, 31);
  }

  const hasDropdowns = props.captionLayout?.startsWith("dropdown");
  if (startMonth) {
    startMonth = startOfMonth(startMonth);
  } else if (fromYear) {
    startMonth = new dateLib.Date(fromYear, 0, 1);
  } else if (!startMonth && hasDropdowns) {
    const today =
      props.today ??
      (props.timeZone ? TZDate.tz(props.timeZone) : new dateLib.Date());
    startMonth = startOfYear(addYears(today, -100));
  }
  if (endMonth) {
    endMonth = endOfMonth(endMonth);
  } else if (toYear) {
    endMonth = new dateLib.Date(toYear, 11, 31);
  } else if (!endMonth && hasDropdowns) {
    const today =
      props.today ??
      (props.timeZone ? TZDate.tz(props.timeZone) : new dateLib.Date());
    endMonth = endOfYear(today);
  }
  return [
    startMonth ? startOfDay(startMonth) : startMonth,
    endMonth ? startOfDay(endMonth) : endMonth
  ];
}
