import { addMonths, differenceInMonths, startOfMonth } from 'date-fns';
import { DayPickerProps } from '../DayPicker/types/DayPickerProps';

/**
 * Get the months to render in DayPicker according to the passed
 * `numberOfMonths` and other month-related props.
 */
export function getMonths(props: DayPickerProps): Date[] {
  const {
    month = new Date(),
    numberOfMonths = 1,
    toMonth,
    fromMonth,
    reverseMonths
  } = props;

  const start = startOfMonth(month);
  const end = startOfMonth(addMonths(start, numberOfMonths));
  const monthsDiff = differenceInMonths(end, start);

  let months = [];
  for (let i = 0; i < monthsDiff; i++) {
    const nextMonth = addMonths(start, i);
    if (toMonth && nextMonth > startOfMonth(toMonth)) {
      // Skip months after toMonth
      continue;
    }
    if (fromMonth && nextMonth < startOfMonth(fromMonth)) {
      // Skip months before fromMonth
      continue;
    }
    months.push(nextMonth);
  }

  if (reverseMonths) {
    months = months.reverse();
  }
  return months;
}
