import { startOfDay, startOfMonth } from 'date-fns';

import { DayPickerProps } from '../../../types';

/**
 * Build the `fromDate` and `toDate` values, given the fromMonth/toMonth
 * or fromYear/toYear props.
 */
export function parseFromToProps(
  props: Pick<
    DayPickerProps,
    'fromYear' | 'toYear' | 'fromDate' | 'toDate' | 'fromMonth' | 'toMonth'
  >
): { fromDate: Date | undefined; toDate: Date | undefined } {
  const { fromYear, toYear, fromMonth, toMonth } = props;
  let { fromDate, toDate } = props;

  if (fromMonth) {
    fromDate = startOfMonth(fromMonth);
  } else if (fromYear) {
    fromDate = new Date(fromYear, 0, 1);
  }
  if (toMonth) {
    toDate = startOfMonth(toMonth);
  } else if (toYear) {
    toDate = new Date(toYear, 11, 31);
  }

  return {
    fromDate: fromDate ? startOfDay(fromDate) : undefined,
    toDate: toDate ? startOfDay(toDate) : undefined
  };
}
