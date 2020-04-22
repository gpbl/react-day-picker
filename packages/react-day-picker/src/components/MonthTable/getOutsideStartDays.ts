import { startOfWeek, differenceInDays, addDays } from 'date-fns';
import { DayPickerProps } from '../DayPicker';

/**
 * Return the outside starting days for the given day.
 */
export function getOutsideStartDays(day: Date, props: DayPickerProps): Date[] {
  const { locale } = props;
  const days = [];
  const firstDayOfWeek = startOfWeek(day, { locale });
  const startDiff = differenceInDays(day, firstDayOfWeek);

  for (let i = 0; i < startDiff; i++) {
    const newDay = addDays(firstDayOfWeek, i);
    days.push(newDay);
  }
  return days;
}
