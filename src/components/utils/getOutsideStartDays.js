import { startOfWeek, differenceInDays, addDays } from 'date-fns';
import { DateWithModifiers } from '../../classes';

function getOutsideStartDays(firstDay, props) {
  const { locale } = props;
  const days = [];
  const firstDayOfWeek = startOfWeek(firstDay, { locale });
  const startDiff = differenceInDays(firstDay, firstDayOfWeek);

  for (let i = 0; i < startDiff; i++) {
    const day = addDays(firstDayOfWeek, i);
    const dayWithModifiers = new DateWithModifiers(
      day,
      { outside: 'start', hidden: day < props.fromMonth },
      props
    );
    days.push(dayWithModifiers);
  }
  return days;
}

export default getOutsideStartDays;
