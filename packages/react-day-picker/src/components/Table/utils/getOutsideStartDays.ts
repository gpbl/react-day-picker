import {
  addDays,
  differenceInCalendarDays,
  Locale,
  startOfWeek
} from 'date-fns';

export function getOutsideStartDays(
  month: Date,
  options?: { locale?: Locale }
): Date[] {
  const days = [];
  const firstDayOfWeek = startOfWeek(month, options);
  const startDiff = differenceInCalendarDays(month, firstDayOfWeek);

  for (let i = 0; i < startDiff; i++) {
    const newDay = addDays(firstDayOfWeek, i);
    days.push(newDay);
  }
  return days;
}
