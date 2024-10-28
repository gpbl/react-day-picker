import { defaultDateLib } from "../classes/DateLib";

import { areRangesOverlapping } from "./areRangesOverlapping";

const sunday = new Date(2024, 8, 1);
const monday = new Date(2024, 8, 2);
const tuesday = new Date(2024, 8, 3);
const thursday = new Date(2024, 8, 5);
const saturday = new Date(2024, 8, 7);
const nextWeekSunday = new Date(2024, 8, 8);

const leftRange = { from: monday, to: saturday };

test('should return true when matching the "from" date', () => {
  const rightRange = { from: sunday, to: monday };
  const result = areRangesOverlapping(leftRange, rightRange, defaultDateLib);
  expect(result).toBe(true);
});

test('should return true when matching the "to" date', () => {
  const rightRange = { from: saturday, to: nextWeekSunday };
  const result = areRangesOverlapping(leftRange, rightRange, defaultDateLib);
  expect(result).toBe(true);
});

test("should return true when left date range contains right date range", () => {
  const rightRange = { from: tuesday, to: thursday };
  const result = areRangesOverlapping(leftRange, rightRange, defaultDateLib);
  expect(result).toBe(true);
});

test("should return true when right date range contains left date range", () => {
  const rightRange = { from: sunday, to: nextWeekSunday };
  const result = areRangesOverlapping(leftRange, rightRange, defaultDateLib);
  expect(result).toBe(true);
});

test("should return true when a date range is inverted", () => {
  const rightRange = { to: sunday, from: nextWeekSunday };
  const result = areRangesOverlapping(leftRange, rightRange, defaultDateLib);
  expect(result).toBe(true);
});

test('should return false on the edge of the "from" date', () => {
  const rightRange = { from: new Date(2000, 1, 1), to: sunday };
  const result = areRangesOverlapping(leftRange, rightRange, defaultDateLib);
  expect(result).toBe(false);
});

test('should return false on the edge of the "to" date', () => {
  const rightRange = { from: nextWeekSunday, to: new Date(2077, 1, 1) };
  const result = areRangesOverlapping(leftRange, rightRange, defaultDateLib);
  expect(result).toBe(false);
});

test("should return false when a date range is inverted", () => {
  const rightRange = { to: nextWeekSunday, from: new Date(2077, 1, 1) };
  const result = areRangesOverlapping(leftRange, rightRange, defaultDateLib);
  expect(result).toBe(false);
});
