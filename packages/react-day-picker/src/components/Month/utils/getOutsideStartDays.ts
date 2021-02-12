import { addDays, differenceInDays, startOfWeek } from 'date-fns';
import { DayPickerProps } from 'types';

export function getOutsideStartDays(
  month: Date,
  props: DayPickerProps
): Date[] {
  const { locale } = props;
  const days = [];
  const firstDayOfWeek = startOfWeek(month, { locale });
  const startDiff = differenceInDays(month, firstDayOfWeek);

  for (let i = 0; i < startDiff; i++) {
    const newDay = addDays(firstDayOfWeek, i);
    days.push(newDay);
  }
  return days;
}
