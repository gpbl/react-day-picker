import { getMonthCode } from "../utils/calendarMath.js";
import { toHebrewDate } from "../utils/dateConversion.js";
import { setMonth } from "./setMonth.js";

describe("hebrew setMonth", () => {
  test("changes month within same Hebrew year", () => {
    const tishrei5785 = new Date(2024, 9, 3);
    const kislev = setMonth(tishrei5785, 2);
    const hebrew = toHebrewDate(kislev);
    expect(hebrew.year).toBe(5785);
    expect(getMonthCode(hebrew.year, hebrew.monthIndex)).toBe("kislev");
  });
});
