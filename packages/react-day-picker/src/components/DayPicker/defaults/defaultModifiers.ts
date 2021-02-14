import { isSameMonth, isToday } from 'date-fns';
import { ModifiersMatchers } from '../../../types';

export const defaultModifiers: ModifiersMatchers = {
  interactive: (day, currentMonth, props) => props.onDayClick !== undefined,
  outside: (day, currentMonth, props) => !isSameMonth(day, currentMonth),
  today: isToday
};
