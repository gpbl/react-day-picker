import { isAfter, isBefore, startOfMonth } from 'date-fns';

import { DayPickerProps } from '../types';

export function getMonthFromProps(props: DayPickerProps = {}): Date {
  let month = props.month;
  const { toMonth, fromMonth } = props;

  if (!month) {
    month =
      props.initialMonth ||
      (props.today !== 'off' && props.today) ||
      defaultProps.today;
    month = startOfMonth(month);
  }
  // Fix initial month if is after the `toMonth` prop.
  if (toMonth && isAfter(month, startOfMonth(toMonth))) {
    month = startOfMonth(toMonth);
  }
  // Fix initial month if before the `fromMonth`
  if (fromMonth && isBefore(month, startOfMonth(fromMonth))) {
    month = startOfMonth(fromMonth);
  }
  return month;
}
