import { getMonthCode } from "../utils/calendarMath.js";
import { toHebrewDate } from "../utils/dateConversion.js";
import { addMonths } from "./addMonths.js";

describe("hebrew addMonths", () => {
  test("advances month and preserves day when possible", () => {
    const tishrei5785 = new Date(2024, 9, 3);
    const next = addMonths(tishrei5785, 1);
    const hebrew = toHebrewDate(next);
    expect(getMonthCode(hebrew.year, hebrew.monthIndex)).toBe("cheshvan");
    expect(hebrew.day).toBe(1);
  });
});
