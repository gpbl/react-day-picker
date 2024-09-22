import type { DateLib } from "../lib/index.js";
import type { DayPickerProps } from "../types/index.js";

/**
 * Return the next month the user can navigate to according to the given
 * options.
 *
 * Please note that the next month is not always the next calendar month:
 *
 * - If after the `calendarEndMonth` range, is `undefined`;
 * - If the navigation is paged , is the number of months displayed ahead.
 */
export function getNextMonth(
  firstDisplayedMonth: Date,
  calendarEndMonth: Date | undefined,
  options: Pick<
    DayPickerProps,
    "numberOfMonths" | "pagedNavigation" | "disableNavigation"
  >,
  dateLib: DateLib
): Date | undefined {
  if (options.disableNavigation) {
    return undefined;
  }
  const { pagedNavigation, numberOfMonths = 1 } = options;
  const { startOfMonth, addMonths, differenceInCalendarMonths } = dateLib;
  const offset = pagedNavigation ? numberOfMonths : 1;
  const month = startOfMonth(firstDisplayedMonth);

  if (!calendarEndMonth) {
    return addMonths(month, offset);
  }

  const monthsDiff = differenceInCalendarMonths(
    calendarEndMonth,
    firstDisplayedMonth
  );

  if (monthsDiff < numberOfMonths) {
    return undefined;
  }

  // Jump forward as the number of months when paged navigation
  return addMonths(month, offset);
}
