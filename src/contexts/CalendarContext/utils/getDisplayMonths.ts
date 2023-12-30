import { addMonths } from 'date-fns/addMonths';

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
  return months;
}
