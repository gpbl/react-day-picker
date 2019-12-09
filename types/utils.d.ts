// TypeScript Version: 3.1

import { RangeModifier, Modifier } from './common';

export interface LocaleUtils {
  formatDate(date: Date, format?: string | string[], locale?: string): string;
  formatDay(day: Date, locale?: string): string;
  formatMonthTitle(month: Date, locale?: string): string;
  formatWeekdayLong(weekday: number, locale?: string): string;
  formatWeekdayShort(weekday: number, locale?: string): string;
  getFirstDayOfWeek(locale?: string): number;
  getMonths(
    locale?: string
  ): [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  parseDate(str: string, format?: string, locale?: string): Date;
};

export const DateUtils: {
  addDayToRange(day: Date, range: RangeModifier): RangeModifier;
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

export const ModifiersUtils: {
  dayMatchesModifier(day: Date, modifier?: Modifier | Modifier[]): boolean;
  getModifiersForDay(
    day: Date,
    modifiers: Record<string, Modifier | Modifier[]>
  ): string[];
};
