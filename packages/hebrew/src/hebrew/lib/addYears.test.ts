import { getMonthCode } from "../utils/calendarMath.js";
import { toHebrewDate } from "../utils/dateConversion.js";
import { addYears } from "./addYears.js";

describe("hebrew addYears", () => {
  test("keeps Adar when moving from leap to common year", () => {
    const adarIi5784 = new Date(2024, 2, 12);
    const result = addYears(adarIi5784, 1);
    const hebrew = toHebrewDate(result);
    expect(hebrew.year).toBe(5785);
    expect(getMonthCode(hebrew.year, hebrew.monthIndex)).toBe("adar");
  });
});
