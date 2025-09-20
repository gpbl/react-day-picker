import { getMonthCode } from "../utils/calendarMath.js";
import { toHebrewDate } from "../utils/dateConversion.js";
import { addMonths } from "./addMonths.js";

describe("hebrew addMonths sequence", () => {
  test("cycles through months", () => {
    let current = new Date(2024, 9, 3); // Tishrei 5785
    const codes: string[] = [];
    for (let i = 0; i < 8; i++) {
      const hebrew = toHebrewDate(current);
      codes.push(getMonthCode(hebrew.year, hebrew.monthIndex));
      current = addMonths(current, 1);
    }
    expect(codes).toEqual([
      "tishrei",
      "cheshvan",
      "kislev",
      "tevet",
      "shevat",
      "adar",
      "nisan",
      "iyar",
    ]);
  });
});
