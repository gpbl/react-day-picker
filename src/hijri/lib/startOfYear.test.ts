import { toHijriDate } from "../utils/calendar.js";
import { startOfYear } from "./startOfYear.js";

describe("hijri startOfYear", () => {
  test("returns first day of Muharram", () => {
    const date = new Date(2024, 9, 15);
    const result = startOfYear(date);
    const hijri = toHijriDate(result, undefined);
    expect(hijri.monthIndex).toBe(0);
    expect(hijri.day).toBe(1);
  });
});
