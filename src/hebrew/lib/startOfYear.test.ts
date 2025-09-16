import { toHebrewDate } from "../utils/dateConversion.js";
import { startOfYear } from "./startOfYear.js";

describe("hebrew startOfYear", () => {
  test("returns first day of Hebrew year", () => {
    const nisan5784 = new Date(2024, 3, 23);
    const start = startOfYear(nisan5784);
    const hebrew = toHebrewDate(start);
    expect(hebrew.monthIndex).toBe(0);
    expect(hebrew.day).toBe(1);
  });
});
