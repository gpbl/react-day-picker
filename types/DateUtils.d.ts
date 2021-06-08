import { RangeModifier } from './Modifiers';

export const DateUtils: {
  addDayToRange(day: Date, range?: RangeModifier): RangeModifier;
  addMonths(d: Date, n: number): Date;
  clone(d: Date): Date;
  isDate(d: Date): boolean;
  isDayAfter(day1: Date, day2: Date): boolean;
  isDayBefore(day1: Date, day2: Date): boolean;
  isDayBetween(day: Date, begin: Date, end: Date): boolean;
  isDayInRange(day: Date, range: RangeModifier): boolean;
  isFutureDay(day: Date): boolean;
  isPastDay(day: Date): boolean;
  isSameDay(day1: Date, day2: Date): boolean;
  isSameMonth(day1: Date, day2: Date): boolean;
};
export type DateUtils = typeof DateUtils;
