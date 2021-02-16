import { isSameDay, isSameMonth } from 'date-fns';
import { ModifiersMatchers } from '../../../types';
import { DayPickerContextValue } from '../DayPickerContext';

function isOutside(day: Date, currentMonth: Date): boolean {
  return !isSameMonth(day, currentMonth);
}

function isInteractive(
  day: Date,
  currentMonth: Date,
  context: DayPickerContextValue
): boolean {
  return !isOutside(day, currentMonth) && context.onDayClick !== undefined;
}

function isToday(day: Date, _: Date, context: DayPickerContextValue): boolean {
  return isSameDay(day, context.today);
}

export const defaultModifiers: ModifiersMatchers = {
  interactive: isInteractive,
  outside: isOutside,
  today: isToday
};
