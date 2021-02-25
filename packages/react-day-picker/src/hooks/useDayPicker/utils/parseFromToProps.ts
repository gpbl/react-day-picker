import { startOfMonth } from 'date-fns';

import { DayPickerProps } from '../../../types';

/**
 * Build the `fromDate` and `toDate` context values, given the fromMonth/toMonth
 * or fromYear/toYear.
 */
export function parseFromToProps(
  props: DayPickerProps
): { fromDate: Date | undefined; toDate: Date | undefined } {
  // Merge the from*/to* props into fromDate/toDate
  let fromDate: Date | undefined = props.fromDate;
  if (props.fromMonth) {
    fromDate = startOfMonth(props.fromMonth);
  } else if (props.fromYear) {
    fromDate = new Date(props.fromYear, 0, 1);
  }
  let toDate: Date | undefined = props.toDate;
  if (props.toMonth) {
    toDate = startOfMonth(props.toMonth);
  } else if (props.toYear) {
    toDate = new Date(props.toYear, 11, 31);
  }
  return { fromDate, toDate };
}
