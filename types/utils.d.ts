// TypeScript Version: 2.2

import { RangeModifier, Modifier } from "./common";

export namespace LocaleUtils {
  function formatDay(day: Date, locale?: string): string;
  function formatMonthTitle(month: Date, locale?: string): string;
  function formatWeekdayLong(weekday: number, locale?: string): string;
  function formatWeekdayShort(weekday: number, locale?: string): string;
  function getFirstDayOfWeek(locale?: string): number;
  function getMonths(
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
}

export namespace DateUtils {
  function addDayToRange(day: Date, range: RangeModifier): RangeModifier;
  function addMonths(d: Date, n: number): Date;
  function clone(d: Date): Date;
  function isDate(d: Date): boolean;
  function isDayAfter(day1: Date, day2: Date): boolean;
  function isDayBefore(day1: Date, day2: Date): boolean;
  function isDayBetween(day: Date, begin: Date, end: Date): boolean;
  function isDayInRange(day: Date, range: RangeModifier): boolean;
  function isFutureDay(day: Date): boolean;
  function isPastDay(day: Date): boolean;
  function isSameDay(day1: Date, day2: Date): boolean;
  function isSameMonth(day1: Date, day2: Date): boolean;
}

export namespace ModifiersUtils {
  function dayMatchesModifier(day: Date, modifier?: Modifier | Modifier[]): boolean;
  function getModifiersForDay(
    day: Date,
    modifiers: Record<string, Modifier | Modifier[]>
  ): string[];
}
