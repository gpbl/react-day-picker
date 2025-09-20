import {
  daysInHebrewMonth,
  monthsInHebrewYear,
} from "../utils/calendarMath.js";
import { toHebrewDate } from "../utils/dateConversion.js";
import { endOfYear } from "./endOfYear.js";

describe("hebrew endOfYear", () => {
  test("returns last day of Hebrew year", () => {
    const date = new Date(2024, 3, 23);
    const end = endOfYear(date);
    const hebrew = toHebrewDate(end);
    const lastMonth = monthsInHebrewYear(hebrew.year) - 1;
    expect(hebrew.monthIndex).toBe(lastMonth);
    expect(hebrew.day).toBe(daysInHebrewMonth(hebrew.year, hebrew.monthIndex));
  });
});
