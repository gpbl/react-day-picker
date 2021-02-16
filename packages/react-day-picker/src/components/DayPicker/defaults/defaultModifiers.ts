import { isAfter, isBefore, isSameDay, isSameMonth } from 'date-fns';

import { ModifiersMatchers } from '../../../types';
import { PropsValues } from '../PropsContext';

function isOutside(day: Date, currentMonth: Date): boolean {
  return !isSameMonth(day, currentMonth);
}

function isInteractive(
  day: Date,
  currentMonth: Date,
  props: PropsValues
): boolean {
  const { toDate, fromDate } = props;
  const isAfterToDate = toDate && isAfter(day, toDate);
  const isBeforeFromDate = fromDate && isBefore(day, fromDate);
  return (
    !isAfterToDate &&
    !isBeforeFromDate &&
    !isOutside(day, currentMonth) &&
    props.onDayClick !== undefined
  );
}

function isToday(day: Date, _: Date, props: PropsValues): boolean {
  return isSameDay(day, props.today);
}

export const defaultModifiers: ModifiersMatchers = {
  interactive: isInteractive,
  outside: isOutside,
  today: isToday
};
