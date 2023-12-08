import { addMonths } from 'date-fns';

/** Return the first days of the month that are displayed in the calendar. */
export function getDisplayMonths(
  firstMonth: Date,
  options: {
    numberOfMonths: number;
    toDate?: Date;
    reverseMonths?: boolean;
  }
) {
  const { numberOfMonths, toDate } = options;
  const months: Date[] = [];
  for (let i = 0; i < numberOfMonths; i++) {
    const month = addMonths(firstMonth, i);
    if (toDate && month > toDate) {
      break;
    }
    months.push(month);
  }
  if (options.reverseMonths) {
    months.reverse();
  }
  return months;
}
