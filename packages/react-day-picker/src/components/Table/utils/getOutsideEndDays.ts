import { addDays, differenceInDays, endOfWeek } from 'date-fns';

export function getOutsideEndDays(
  month: Date,
  options?: { locale?: Locale }
): Date[] {
  const days = [];
  const lastDayOfWeek = endOfWeek(month, options);
  const endDiff = differenceInDays(lastDayOfWeek, month);

  for (let i = 1; i <= endDiff; i++) {
    const dayDate = addDays(month, i);
    days.push(dayDate);
  }
  return days;
}
