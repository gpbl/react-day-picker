import { addMonths, differenceInMonths, startOfMonth } from 'date-fns';
import { DayPickerProps } from '../../types/DayPickerProps';

interface PrepareDayPicker {
  months: Array<Date>;
}

export function prepareDayPicker(props: DayPickerProps): PrepareDayPicker {
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
