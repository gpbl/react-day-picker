import { endOfYear } from "./endOfYear.js";
import { toHijriDate } from "../utils/calendar.js";

describe("hijri endOfYear", () => {
  test("returns last day of Dhu al-Hijjah", () => {
    const date = new Date(2024, 9, 3);
    const end = endOfYear(date);
    const hijri = toHijriDate(end, undefined);
    expect(hijri.monthIndex).toBe(11);
    expect(hijri.day).toBe(29);
  });
});
