import { toHijriDate } from "../utils/calendar.js";
import { startOfMonth } from "./startOfMonth.js";

describe("hijri startOfMonth", () => {
  test("resets day to first", () => {
    const date = new Date(2024, 9, 15);
    const result = startOfMonth(date);
    const hijri = toHijriDate(result, undefined);
    expect(hijri.day).toBe(1);
  });
});
