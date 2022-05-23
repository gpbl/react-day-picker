import addMonths from 'date-fns/addMonths';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';
import startOfMonth from 'date-fns/startOfMonth';

/**
 * Returns the next month the user can navigate to according to the given
 * options.
 *
 * Please note that the next month is not always the next calendar month:
 *
 * - if after the `toDate` range, is undefined;
 * - if the navigation is paged, is the number of months displayed ahead.
 *
 */
export function getNextMonth(
  startingMonth: Date,
  options: {
    numberOfMonths?: number;
    fromDate?: Date | undefined;
    toDate?: Date | undefined;
    pagedNavigation?: boolean | undefined;
    today?: Date;
    disableNavigation?: boolean | undefined;
  }
): Date | undefined {
  if (options.disableNavigation) {
    return undefined;
  }
  const { toDate, pagedNavigation, numberOfMonths = 1 } = options;
  const offset = pagedNavigation ? numberOfMonths : 1;
  const month = startOfMonth(startingMonth);

  if (!toDate) {
    return addMonths(month, offset);
  }

  const monthsDiff = differenceInCalendarMonths(toDate, startingMonth);

  if (monthsDiff < numberOfMonths) {
    return undefined;
  }

  // Jump forward as the number of months when paged navigation
  return addMonths(month, offset);
}
