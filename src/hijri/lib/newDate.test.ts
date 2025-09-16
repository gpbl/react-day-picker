import { toHijriDate } from "../utils/calendar.js";
import { newDate } from "./newDate.js";

describe("hijri newDate", () => {
  test("creates gregorian date from hijri fields", () => {
    const result = newDate(1446, 2, 30);
    const hijri = toHijriDate(result, undefined);
    expect(hijri.year).toBe(1446);
    expect(hijri.monthIndex).toBe(2);
    expect(hijri.day).toBe(30);
  });
});
