import { endOfMonth, startOfDay, startOfMonth } from "date-fns";

import { PropsBase } from "../../../types/PropsBase";

/**
 * Return the `fromDate` and `toDate` prop values values parsing the DayPicker
 * props.
 */
export function parseFromToProps(
  props: Pick<
    PropsBase,
    "fromYear" | "toYear" | "fromDate" | "toDate" | "fromMonth" | "toMonth"
  >
): { fromDate: Date | undefined; toDate: Date | undefined } {
  const { fromYear, toYear, fromMonth, toMonth } = props;
  let { fromDate, toDate } = props;

  if (fromMonth) {
    fromDate = startOfMonth(fromMonth);
  } else if (fromYear) {
    fromDate = new Date(fromYear, 0, 1);
  }
  if (toMonth) {
    toDate = endOfMonth(toMonth);
  } else if (toYear) {
    toDate = new Date(toYear, 11, 31);
  }

  return {
    fromDate: fromDate ? startOfDay(fromDate) : undefined,
    toDate: toDate ? startOfDay(toDate) : undefined
  };
}
