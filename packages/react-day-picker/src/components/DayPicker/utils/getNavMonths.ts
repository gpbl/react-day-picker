import { addMonths, startOfMonth } from 'date-fns';

import { CaptionLayout } from '../../../types';

type GetNavMonthsOptions = {
  numberOfMonths: number;
  fromDate?: Date;
  toDate?: Date;
  pagedNavigation?: boolean;
  today?: Date;
  captionLayout: CaptionLayout;
};

/**
 * Returns the next and the previous months that the user can navigate to.
 */
export function getNavMonths(
  month: Date,
  options: GetNavMonthsOptions
): [prevMonth?: Date, nextMonth?: Date] {
  const {
    fromDate,
    toDate,
    pagedNavigation,
    numberOfMonths,
    captionLayout
  } = options;

  if (captionLayout === 'static') {
    return [undefined, undefined];
  }
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
