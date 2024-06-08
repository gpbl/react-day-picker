import { addYears } from "date-fns/addYears";
import { endOfMonth } from "date-fns/endOfMonth";
import { endOfYear } from "date-fns/endOfYear";
import { startOfDay } from "date-fns/startOfDay";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfYear } from "date-fns/startOfYear";

import type { DayPickerProps, Mode } from "../types";

/**
 * Return the `startMonth` and `endMonth` prop values values parsing the
 * DayPicker props.
 */
export function getStartEndMonths(
  props: Pick<
    DayPickerProps<Mode, boolean>,
    | "fromYear"
    | "toYear"
    | "startMonth"
    | "endMonth"
    | "today"
    | "captionLayout"
  >
): Pick<DayPickerProps<Mode, boolean>, "startMonth" | "endMonth"> {
  let { startMonth, endMonth } = props;
  const hasDropdowns = props.captionLayout?.startsWith("dropdown");
  if (startMonth) {
    startMonth = startOfMonth(startMonth);
  }
  if (endMonth) {
    endMonth = endOfMonth(endMonth);
  }
  return {
    startMonth: startMonth ? startOfDay(startMonth) : undefined,
    endMonth: endMonth ? startOfDay(endMonth) : undefined
  };
}
