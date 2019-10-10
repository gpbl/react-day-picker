import { endOfWeek, differenceInDays, addDays } from 'date-fns';
import { DateWithModifiers } from '../../classes';
import { DayPickerProps } from 'types/props';

function getOutsideEndDays(lastDay: Date, props: DayPickerProps) {
  const { locale } = props;
  const days = [];
  const lastDayOfWeek = endOfWeek(lastDay, { locale });
  const endDiff = differenceInDays(lastDayOfWeek, lastDay);
  for (let i = 1; i <= endDiff; i++) {
    const day = addDays(lastDay, i);
    const hidden = props.toMonth && day > props.toMonth;
    const modifiers = { outside: 'end', hidden };
    const dateWithModifiers = new DateWithModifiers(day, modifiers, props);
    days.push(dateWithModifiers);
  }
  return days;
}

export default getOutsideEndDays;
