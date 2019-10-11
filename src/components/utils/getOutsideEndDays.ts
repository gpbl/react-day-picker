import { endOfWeek, differenceInDays, addDays } from 'date-fns';
import { DateWithModifiers } from '../../classes';
import { DayPickerProps } from '../../types/DayPickerProps';

export function getOutsideEndDays(
  lastDay: DateWithModifiers,
  props: DayPickerProps
): Array<DateWithModifiers> {
  const { locale } = props;
  const days = [];
  const lastDayOfWeek = endOfWeek(lastDay.date, { locale });
  const endDiff = differenceInDays(lastDayOfWeek, lastDay.date);
  for (let i = 1; i <= endDiff; i++) {
    const day = addDays(lastDay.date, i);
    const hidden = props.toMonth && day > props.toMonth;
    const modifiers = { outside: 'end', hidden };
    const dateWithModifiers = new DateWithModifiers(day, modifiers, props);
    days.push(dateWithModifiers);
  }
  return days;
}
