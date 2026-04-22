import { defaultDateLib } from "../classes/DateLib.js";
import type {
  DateAfter,
  DateBefore,
  DateInterval,
  DateRange,
  DayOfWeek,
} from "../types/index.js";

import {
  isDateAfterType,
  isDateBeforeType,
  isDateInterval,
  isDateRange,
  isDatesArray,
  isDayOfWeekType,
} from "./typeguards.js";

test("isDateInterval return true for valid DateInterval", () => {
  const validInterval: DateInterval = { before: new Date(), after: new Date() };
  expect(isDateInterval(validInterval)).toBe(true);
});

test("isDateInterval return false for invalid DateInterval", () => {
  expect(isDateInterval({})).toBe(false);
  expect(isDateInterval(null)).toBe(false);
  expect(isDateInterval(undefined)).toBe(false);
});

test("isDateRange return true for valid DateRange", () => {
  const validRange: DateRange = { from: new Date() };
  expect(isDateRange(validRange)).toBe(true);
});

test("isDateRange return false for invalid DateRange", () => {
  expect(isDateRange({})).toBe(false);
  expect(isDateRange(null)).toBe(false);
  expect(isDateRange(undefined)).toBe(false);
});

test("isDateAfterType return true for valid DateAfter", () => {
  const validAfter: DateAfter = { after: new Date() };
  expect(isDateAfterType(validAfter)).toBe(true);
});

test("isDateAfterType return false for invalid DateAfter", () => {
  expect(isDateAfterType({})).toBe(false);
  expect(isDateAfterType(null)).toBe(false);
  expect(isDateAfterType(undefined)).toBe(false);
});

test("isDateBeforeType return true for valid DateBefore", () => {
  const validBefore: DateBefore = { before: new Date() };
  expect(isDateBeforeType(validBefore)).toBe(true);
});

test("isDateBeforeType return false for invalid DateBefore", () => {
  expect(isDateBeforeType({})).toBe(false);
  expect(isDateBeforeType(null)).toBe(false);
  expect(isDateBeforeType(undefined)).toBe(false);
});

test("isDayOfWeekType return true for valid DayOfWeek", () => {
  const validDayOfWeek: DayOfWeek = { dayOfWeek: [1] };
  expect(isDayOfWeekType(validDayOfWeek)).toBe(true);
});

test("isDayOfWeekType return false for invalid DayOfWeek", () => {
  expect(isDayOfWeekType({})).toBe(false);
  expect(isDayOfWeekType(null)).toBe(false);
  expect(isDayOfWeekType(undefined)).toBe(false);
});

test("isDatesArray return true for valid array of dates", () => {
  const validDatesArray: Date[] = [new Date(), new Date()];
  expect(isDatesArray(validDatesArray, defaultDateLib)).toBe(true);
});

test("isDatesArray return false for invalid array of dates", () => {
  expect(isDatesArray([{}, {}], defaultDateLib)).toBe(false);
  expect(isDatesArray(null, defaultDateLib)).toBe(false);
  expect(isDatesArray(undefined, defaultDateLib)).toBe(false);
});
