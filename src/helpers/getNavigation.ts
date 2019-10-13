import { startOfMonth, addMonths } from 'date-fns';
import { DayPickerProps } from '../../typings/react-day-picker';

/**
 * Return the next and the previous month for the navigation.
 */
export function getNavigation(
  props: DayPickerProps
): { nextMonth?: Date; prevMonth?: Date } {
  const { fromMonth, toMonth, month, numberOfMonths, pagedNavigation } = props;

  const add = pagedNavigation ? numberOfMonths : 1;
  const currentMonth = startOfMonth(month);

  let prevMonth: Date | undefined;
  if (!fromMonth || currentMonth > startOfMonth(fromMonth)) {
    prevMonth = addMonths(currentMonth, add * -1);
  }

  let nextMonth: Date | undefined;
  if (
    !toMonth ||
    addMonths(currentMonth, numberOfMonths) <= startOfMonth(toMonth)
  ) {
    nextMonth = addMonths(currentMonth, add);
  }

  return { nextMonth, prevMonth };
}
