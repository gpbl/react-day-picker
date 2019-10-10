import { startOfWeek, differenceInDays, addDays } from 'date-fns';
import { DateWithModifiers } from '../../classes';
import { DayPickerProps } from 'types/props';

function getOutsideStartDays(firstDay: Date, props: DayPickerProps) {
  const { locale } = props;
  const days = [];
  const firstDayOfWeek = startOfWeek(firstDay, { locale });
  const startDiff = differenceInDays(firstDay, firstDayOfWeek);

  for (let i = 0; i < startDiff; i++) {
    const day = addDays(firstDayOfWeek, i);
    const hidden = props.fromMonth && day < props.fromMonth;
    const modifiers = { outside: 'start', hidden };
    const dateWithModifiers = new DateWithModifiers(day, modifiers, props);
    days.push(dateWithModifiers);
  }
  return days;
}

export default getOutsideStartDays;
