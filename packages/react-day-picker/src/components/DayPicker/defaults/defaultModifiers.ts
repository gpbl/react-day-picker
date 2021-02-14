import { isSameMonth, isToday } from 'date-fns';
import { ModifiersMatchers } from '../../../types';

export const defaultModifiers: ModifiersMatchers = {
  interactive: (_, __, props) => props.onDayClick !== undefined,
  outside: (day, currentMonth) => !isSameMonth(day, currentMonth),
  today: isToday
};
