import { addMonths, startOfMonth } from 'date-fns';

/**
 * Returns the next and the previous months that the user can navigate to.
 */
export function getPrevNextMonths(
  month: Date,
  options: {
    numberOfMonths: number;
    fromDate?: Date;
    toDate?: Date;
    pagedNavigation?: boolean;
    today?: Date;
  }
): [Date?, Date?] {
  const { fromDate, toDate, pagedNavigation, numberOfMonths } = options;

  const add = pagedNavigation ? numberOfMonths : 1;
  const currentMonth = startOfMonth(month ?? options.today);

  let prevMonth: Date | undefined;
  if (!fromDate || currentMonth > startOfMonth(fromDate)) {
    prevMonth = addMonths(currentMonth, add * -1);
  }

  let nextMonth: Date | undefined;
  if (
    !toDate ||
    addMonths(currentMonth, numberOfMonths) <= startOfMonth(toDate)
  ) {
    nextMonth = addMonths(currentMonth, add);
  }

  return [prevMonth, nextMonth];
}
