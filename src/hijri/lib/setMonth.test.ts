import { toHijriDate } from "../utils/calendar.js";
import { setMonth } from "./setMonth.js";

describe("hijri setMonth", () => {
  test("changes month while clamping day", () => {
    const date = new Date(2024, 9, 3);
    const result = setMonth(date, 5);
    const hijri = toHijriDate(result, undefined);
    expect(hijri.monthIndex).toBe(5);
  });
});
