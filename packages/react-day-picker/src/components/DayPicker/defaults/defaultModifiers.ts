import { isAfter, isBefore, isSameDay, isSameMonth } from 'date-fns';

import { ModifiersMatchers } from '../../../types';
import { PropsValues } from '../PropsContext';

function isOutside(day: Date, currentMonth: Date): boolean {
  return !isSameMonth(day, currentMonth);
}

/** Props that will make the day button interactive. */
const interactiveProps = [
  'onSelect',
  'onDayClick',
  'onDayMouseEnter',
  'onDayTouchStart'
];
function isInteractive(
  day: Date,
  currentMonth: Date,
  props: PropsValues
): boolean {
  const { toDate, fromDate, originalProps } = props;
  if (props.type !== 'uncontrolled') {
    return true;
  }
  if (interactiveProps.every((name) => !originalProps[name])) {
    return false;
  }
  const isAfterToDate = toDate && isAfter(day, toDate);
  const isBeforeFromDate = fromDate && isBefore(day, fromDate);
  return !isAfterToDate && !isBeforeFromDate && !isOutside(day, currentMonth);
}

function isToday(day: Date, _: Date, props: PropsValues): boolean {
  return isSameDay(day, props.today);
}

export const defaultModifiers: ModifiersMatchers = {
  interactive: isInteractive,
  outside: isOutside,
  today: isToday
};
