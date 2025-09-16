import { toHijriDate } from "../utils/calendar.js";
import { endOfMonth } from "./endOfMonth.js";

describe("hijri endOfMonth", () => {
  test("returns last day of current month", () => {
    const date = new Date(2024, 9, 3);
    const end = endOfMonth(date);
    const hijri = toHijriDate(end, undefined);
    const nextGregorian = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 1);
    const nextHijri = toHijriDate(nextGregorian, undefined);
    expect(nextHijri.monthIndex).not.toBe(hijri.monthIndex);
    expect(nextHijri.day).toBe(1);
  });
});
