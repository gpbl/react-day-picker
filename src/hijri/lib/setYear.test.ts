import { toHijriDate } from "../utils/calendar.js";
import { setYear } from "./setYear.js";

describe("hijri setYear", () => {
  test("moves to target year keeping month", () => {
    const date = new Date(2024, 9, 3);
    const result = setYear(date, 1447);
    const hijri = toHijriDate(result, undefined);
    expect(hijri.year).toBe(1447);
    expect(hijri.monthIndex).toBe(toHijriDate(date, undefined).monthIndex);
  });
});
