import {
  daysInHebrewMonth,
  daysInHebrewYear,
  getMonthCode,
  isHebrewLeapYear,
  monthsInHebrewYear,
  roshHashanah,
} from "./calendarMath.js";

describe("hebrew calendar math", () => {
  test("computes days in year", () => {
    expect(daysInHebrewYear(5784)).toBe(383);
    expect(daysInHebrewYear(5785)).toBe(354);
  });

  test("knows leap years", () => {
    expect(isHebrewLeapYear(5784)).toBe(true);
    expect(isHebrewLeapYear(5785)).toBe(false);
  });

  test("getMonthCode returns correct code", () => {
    expect(getMonthCode(5785, 0)).toBe("tishrei");
  });

  test("daysInHebrewMonth returns correct length", () => {
    expect(daysInHebrewMonth(5785, 0)).toBe(30);
  });

  test("monthsInHebrewYear handles leap and common years", () => {
    expect(monthsInHebrewYear(5784)).toBe(13);
    expect(monthsInHebrewYear(5785)).toBe(12);
  });

  test("daysInHebrewMonth reflects deficient and complete years", () => {
    expect(daysInHebrewMonth(5782, 1)).toBe(30);
    expect(daysInHebrewMonth(5782, 2)).toBe(30);
    expect(daysInHebrewMonth(5775, 1)).toBe(29);
    expect(daysInHebrewMonth(5775, 2)).toBe(29);
  });

  test("roshHashanah difference equals length of previous year", () => {
    const diff = roshHashanah(5785) - roshHashanah(5784);
    expect(diff).toBe(daysInHebrewYear(5784));
  });
});
