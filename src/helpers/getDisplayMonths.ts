import type { PropsContextValue } from "../contexts";

export function getDisplayMonths(
  firstDisplayedMonth: Date,
  props: Pick<PropsContextValue, "numberOfMonths" | "endMonth" | "dateLib">
) {
  const months: Date[] = [];
  for (let i = 0; i < props.numberOfMonths; i++) {
    const month = props.dateLib.addMonths(firstDisplayedMonth, i);
    if (props.endMonth && month > props.endMonth) {
      break;
    }
    months.push(month);
  }
  return months;
}
