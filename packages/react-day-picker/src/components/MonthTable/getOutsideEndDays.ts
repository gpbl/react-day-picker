import { addDays, differenceInDays, endOfWeek } from 'date-fns';

import { DayPickerProps } from '../DayPicker';

export function getOutsideEndDays(month: Date, props: DayPickerProps): Date[] {
  const { locale } = props;
  const days = [];
  const lastDayOfWeek = endOfWeek(month, { locale });
  const endDiff = differenceInDays(lastDayOfWeek, month);

  for (let i = 1; i <= endDiff; i++) {
    const dayDate = addDays(month, i);
    days.push(dayDate);
  }
  return days;
}
