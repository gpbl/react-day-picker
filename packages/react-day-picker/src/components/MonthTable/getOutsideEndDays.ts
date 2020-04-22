import { endOfWeek, differenceInDays, addDays } from 'date-fns';
import { DayPickerProps } from '../DayPicker';

/**
 * Return the outside ending days for the given day.
 */
export function getOutsideEndDays(day: Date, props: DayPickerProps): Date[] {
  const { locale } = props;
  const days = [];
  const lastDayOfWeek = endOfWeek(day, { locale });
  const endDiff = differenceInDays(lastDayOfWeek, day);

  for (let i = 1; i <= endDiff; i++) {
    const dayDate = addDays(day, i);
    days.push(dayDate);
  }
  return days;
}
