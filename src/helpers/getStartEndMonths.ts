import { addYears } from "date-fns/addYears";
import { endOfMonth } from "date-fns/endOfMonth";
import { endOfYear } from "date-fns/endOfYear";
import { startOfDay } from "date-fns/startOfDay";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfYear } from "date-fns/startOfYear";

import type { DayPickerProps, Mode } from "../types";

/**
 * Return the `fromMonth` and `toMonth` prop values values parsing the DayPicker
 * props.
 */
export function getStartEndMonths(
  props: Pick<
    DayPickerProps<Mode, boolean>,
    "fromYear" | "toYear" | "fromMonth" | "toMonth" | "today" | "captionLayout"
  >
): Pick<DayPickerProps<Mode, boolean>, "fromMonth" | "toMonth"> {
  const { fromYear, toYear } = props;
  let { fromMonth, toMonth } = props;
  const hasDropdowns = props.captionLayout?.startsWith("dropdown");
  if (fromMonth) {
    fromMonth = startOfMonth(fromMonth);
  } else if (fromYear) {
    fromMonth = new Date(fromYear, 0, 1);
  } else if (!fromMonth && hasDropdowns) {
    fromMonth = startOfYear(addYears(props.today ?? new Date(), -100));
  }
  if (toMonth) {
    toMonth = endOfMonth(toMonth);
  } else if (toYear) {
    toMonth = new Date(toYear, 11, 31);
  } else if (!toMonth && hasDropdowns) {
    toMonth = endOfYear(props.today ?? new Date());
  }
  return {
    fromMonth: fromMonth ? startOfDay(fromMonth) : undefined,
    toMonth: toMonth ? startOfDay(toMonth) : undefined
  };
}
