import { addMonths, differenceInMonths, startOfMonth } from 'date-fns';

type Options = {
  toDate?: Date;
  fromDate?: Date;
  reverseMonths?: boolean;
};

export function getMonthsToRender(
  currentMonth: Date,
  numberOfMonths: number,
  { toDate, fromDate, reverseMonths }: Options
): Date[] {
  const start = startOfMonth(currentMonth);
  const end = startOfMonth(addMonths(start, numberOfMonths));
  const monthsDiff = differenceInMonths(end, start);

  let months = [];
  for (let i = 0; i < monthsDiff; i++) {
    const nextMonth = addMonths(start, i);
    if (toDate && nextMonth > startOfMonth(toDate)) continue;
    if (fromDate && nextMonth < startOfMonth(fromDate)) continue;
    months.push(nextMonth);
  }

  if (reverseMonths) months = months.reverse();

  return months;
}
