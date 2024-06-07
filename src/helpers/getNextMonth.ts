import { addMonths } from "date-fns/addMonths";
import { differenceInCalendarMonths } from "date-fns/differenceInCalendarMonths";
import { startOfMonth } from "date-fns/startOfMonth";

/**
 * Return the next month the user can navigate to according to the given
 * options.
 *
 * Please note that the next month is not always the next calendar month:
 *
 * - If after the `toMonth` range, is `undefined`;
 * - If the navigation is paged , is the number of months displayed ahead.
 */
export function getNextMonth(
  firstMonth: Date,
  options: {
    numberOfMonths?: number;
    fromMonth?: Date;
    toMonth?: Date;
    pagedNavigation?: boolean;
    today?: Date;
    disableNavigation?: boolean;
  }
): Date | undefined {
  if (options.disableNavigation) {
    return undefined;
  }
  const { toMonth, pagedNavigation, numberOfMonths = 1 } = options;
  const offset = pagedNavigation ? numberOfMonths : 1;
  const month = startOfMonth(firstMonth);

  if (!toMonth) {
    return addMonths(month, offset);
  }

  const monthsDiff = differenceInCalendarMonths(toMonth, firstMonth);

  if (monthsDiff < numberOfMonths) {
    return undefined;
  }

  // Jump forward as the number of months when paged navigation
  return addMonths(month, offset);
}
