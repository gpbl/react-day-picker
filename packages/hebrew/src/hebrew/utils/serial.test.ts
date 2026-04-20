import { daysInHebrewMonth } from "./calendarMath.js";
import { toHebrewDate } from "./dateConversion.js";
import {
  clampHebrewDay,
  hebrewMonthNumber,
  monthIndexToHebrewDate,
  monthsSinceEpoch,
} from "./serial.js";

describe("hebrew serial helpers", () => {
  test("clamps invalid day when switching month", () => {
    const month = monthIndexToHebrewDate(0, 40);
    expect(month.day).toBeLessThanOrEqual(
      daysInHebrewMonth(month.year, month.monthIndex),
    );
  });

  test("monthsSinceEpoch round trip", () => {
    const dates = [
      new Date(2024, 3, 23),
      new Date(1990, 0, 1),
      new Date(1500, 5, 15),
    ];
    dates.forEach((date) => {
      const hebrew = toHebrewDate(date);
      const index = monthsSinceEpoch(hebrew);
      const roundTrip = monthIndexToHebrewDate(index, hebrew.day);
      expect(roundTrip.year).toBe(hebrew.year);
      expect(roundTrip.monthIndex).toBe(hebrew.monthIndex);
      expect(roundTrip.day).toBe(hebrew.day);
    });
  });

  test("monthsSinceEpoch handles negative indices", () => {
    const previousMonth = monthIndexToHebrewDate(-1, 1);
    expect(previousMonth.year).toBe(0);
    expect(previousMonth.monthIndex).toBeGreaterThanOrEqual(0);
  });

  test("clampHebrewDay returns original day when valid", () => {
    const hebrew = toHebrewDate(new Date(2024, 3, 10));
    const clamped = clampHebrewDay(hebrew.year, hebrew.monthIndex, hebrew.day);
    expect(clamped).toBe(hebrew.day);
  });

  test("clampHebrewDay returns month maximum", () => {
    const year = 5785;
    const cheshvanIndex = 1;
    const clamped = clampHebrewDay(year, cheshvanIndex, 30);
    expect(clamped).toBe(daysInHebrewMonth(year, cheshvanIndex));
  });

  test("hebrewMonthNumber converts to 1-based", () => {
    expect(hebrewMonthNumber(0)).toBe(1);
  });
});
