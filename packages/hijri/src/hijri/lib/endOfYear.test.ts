import { toHijriDate } from "../utils/conversion.js";
import { endOfYear } from "./endOfYear.js";

describe("endOfYear", () => {
  test("returns the last day of the Hijri year", () => {
    expect(toHijriDate(endOfYear(new Date(2025, 2, 8)))).toEqual({
      year: 1446,
      monthIndex: 11,
      day: 29,
    });
  });
});
