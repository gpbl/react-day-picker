import { toHebrewDate } from "../utils/dateConversion.js";
import { startOfMonth } from "./startOfMonth.js";

describe("hebrew startOfMonth", () => {
  test("resets to first day of month", () => {
    const nisan5784 = new Date(2024, 3, 23);
    const start = startOfMonth(nisan5784);
    const hebrew = toHebrewDate(start);
    expect(hebrew.day).toBe(1);
    expect(hebrew.monthIndex).toBe(toHebrewDate(nisan5784).monthIndex);
  });
});
