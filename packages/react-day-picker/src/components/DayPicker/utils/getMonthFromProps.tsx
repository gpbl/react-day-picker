import { isAfter, isBefore, startOfMonth } from 'date-fns';
import { DayPickerComponentProps } from 'types';

export function getMonthFromProps(props: DayPickerComponentProps): Date {
  const { toMonth, fromMonth } = props;

  let month =
    props.initialMonth ??
    props.month ??
    (props.today !== 'off' ? props.today : undefined) ??
    new Date();

  month = startOfMonth(month);

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
