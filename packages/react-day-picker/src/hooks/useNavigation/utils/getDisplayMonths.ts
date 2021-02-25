import { addMonths, differenceInMonths, startOfMonth } from 'date-fns';

/**
 * Return the months to display in the component according to the number of
 * months and the from/to date.
 */
export function getDisplayMonths(
  month: Date,
  {
    toDate,
    fromDate,
    reverseMonths,
    numberOfMonths
  }: {
    toDate?: Date;
    fromDate?: Date;
    numberOfMonths: number;
    reverseMonths?: boolean;
  }
): Date[] {
  const start = startOfMonth(month);
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
