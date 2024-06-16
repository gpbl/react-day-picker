import { addMonths } from "date-fns/addMonths";

import type { PropsContextValue } from "../contexts/usePropsContext";

export function getDisplayMonths(
  firstDisplayedMonth: Date,
  props: Pick<PropsContextValue, "numberOfMonths" | "endMonth">
) {
  const months: Date[] = [];
  for (let i = 0; i < props.numberOfMonths; i++) {
    const month = addMonths(firstDisplayedMonth, i);
    if (props.endMonth && month > props.endMonth) {
      break;
    }
    months.push(month);
  }
  return months;
}
