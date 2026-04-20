import { daysInHebrewMonth } from "../utils/calendarMath.js";
import { toHebrewDate } from "../utils/dateConversion.js";
import { endOfMonth } from "./endOfMonth.js";

describe("hebrew endOfMonth", () => {
  test("returns last day in Hebrew month", () => {
    const nisan5784 = new Date(2024, 3, 23);
    const end = endOfMonth(nisan5784);
    const hebrew = toHebrewDate(end);
    expect(hebrew.day).toBe(daysInHebrewMonth(hebrew.year, hebrew.monthIndex));
  });
});
