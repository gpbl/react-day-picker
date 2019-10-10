import { addMonths, differenceInMonths, startOfMonth } from 'date-fns';
import { DayPickerProps } from 'types/props';

/**
 * Return the props for the DayPicker component.
 */
export function prepareDayPicker(props: DayPickerProps) {
  const { month, numberOfMonths, toMonth, fromMonth, reverseMonths } = props;
  const start = startOfMonth(month);
  const end = startOfMonth(addMonths(start, numberOfMonths));
  const monthsDiff = differenceInMonths(end, start);

  let months = [];
  for (let i = 0; i < monthsDiff; i++) {
    const month = addMonths(start, i);
    if (toMonth && month > startOfMonth(toMonth)) {
      continue;
    }
    if (fromMonth && month < startOfMonth(fromMonth)) {
      continue;
    }
    months.push(month);
  }

  if (reverseMonths) {
    months = months.reverse();
  }
  return { months };
}
