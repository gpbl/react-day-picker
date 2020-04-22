import { startOfMonth, addMonths } from 'date-fns';
import { DayPickerProps } from '../DayPicker';
import { NavigationMonths } from './types';
/**
 * Return the next and the previous months for the navigation component,
 * according to the DayPicker props.
 *
 *
 */
export function getNavigation(props: DayPickerProps): NavigationMonths {
  const {
    fromMonth,
    toMonth,
    month,
    numberOfMonths = 1,
    pagedNavigation
  } = props;

  const add = pagedNavigation ? numberOfMonths : 1;
  const currentMonth = startOfMonth(month || new Date());

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
