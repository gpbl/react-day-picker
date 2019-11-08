import { addMonths, differenceInMonths, startOfMonth } from "date-fns";
import { DayPickerProps } from "../../types";

/**
 * Get the months to render in DayPicker according to the passed
 * `numberOfMonths` and other month-related props.
 */
export function getMonths(props: DayPickerProps): Date[] {
  const {
    month = new Date(),
    numberOfMonths,
    toMonth,
    fromMonth,
    reverseMonths
  } = props;

  const start = startOfMonth(month);
  const end = startOfMonth(addMonths(start, numberOfMonths));
  const monthsDiff = differenceInMonths(end, start);

  let months = [];
  for (let i = 0; i < monthsDiff; i++) {
    const month = addMonths(start, i);
    if (toMonth && month > startOfMonth(toMonth)) {
      // Skip months after toMonth
      continue;
    }
    if (fromMonth && month < startOfMonth(fromMonth)) {
      // Skip months before fromMonth
      continue;
    }
    months.push(month);
  }

  if (reverseMonths) {
    months = months.reverse();
  }
  return months;
}
