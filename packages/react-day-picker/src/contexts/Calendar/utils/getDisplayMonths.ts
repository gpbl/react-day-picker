import { addMonths } from 'date-fns';

export function getDisplayMonths(
  firstMonth: Date,
  numberOfMonths: number,
  toDate?: Date
) {
  const months: Date[] = [];
  for (let i = 0; i < numberOfMonths; i++) {
    const month = addMonths(firstMonth, i);
    if (toDate && month > toDate) break;
    months.push(month);
  }
  return months;
}
