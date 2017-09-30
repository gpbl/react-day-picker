// TypeScript Version: 2.2

import { RangeModifier, Modifier } from "./common";

export interface LocaleUtils {
  formatDay(day: Date, locale: string): string;
  formatMonthTitle(month: Date, locale: string): string;
  formatWeekdayLong(weekday: number, locale: string): string;
  formatWeekdayShort(weekday: number, locale: string): string;
  getFirstDayOfWeek(locale: string): number;
  getMonths(
    locale: string
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
}

export interface DateUtils {
  addDayToRange(day: Date, range: RangeModifier): RangeModifier;
  addMonths(d: Date, n: number): Date;
  clone(d: Date): Date;
  isDayAfter(day1: Date, day2: Date): boolean;
  isDayBefore(day1: Date, day2: Date): boolean;
  isDayBetween(day: Date, begin: Date, end: Date): boolean;
  isDayInRange(day: Date, range: RangeModifier): boolean;
  isFutureDay(day: Date): boolean;
  isPastDay(day: Date): boolean;
  isSameDay(day1: Date, day2: Date): boolean;
}

export interface ModifiersUtils {
  dayMatchesModifier(day: Date, modifier?: Modifier | Modifier[]): boolean;
  getModifiersForDay(
    day: Date,
    modifiers: Record<string, Modifier | Modifier[]>
  ): string[];
}
