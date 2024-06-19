import { addYears } from "date-fns/addYears";
import { endOfMonth } from "date-fns/endOfMonth";
import { endOfYear } from "date-fns/endOfYear";
import { startOfDay } from "date-fns/startOfDay";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfYear } from "date-fns/startOfYear";

import type { DayPickerProps } from "../types/props";
import type { Mode } from "../types/shared";

/**
 * Return the `fromMonth` and `toMonth` prop values values parsing the DayPicker
 * props.
 */
export function getStartEndMonths(
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
  >
): Pick<DayPickerProps, "startMonth" | "endMonth"> {
  let { startMonth, endMonth } = props;

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
    startMonth: startMonth ? startOfDay(startMonth) : startMonth,
    endMonth: endMonth ? startOfDay(endMonth) : endMonth
  };
}
