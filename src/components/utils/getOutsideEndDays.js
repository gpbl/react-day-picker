import { endOfWeek, differenceInDays, addDays } from 'date-fns';
import { DateWithModifiers } from '../../classes';

function getOutsideEndDays(lastDay, props) {
  const { locale } = props;
  const days = [];
  const lastDayOfWeek = endOfWeek(lastDay, { locale });
  const endDiff = differenceInDays(lastDayOfWeek, lastDay);
  for (let i = 1; i <= endDiff; i++) {
    const day = addDays(lastDay, i);
    const dayWithModifiers = new DateWithModifiers(
      day,
      { outside: 'end', hidden: day > props.toMonth },
      props
    );
    days.push(dayWithModifiers);
  }
  return days;
}

export default getOutsideEndDays;
