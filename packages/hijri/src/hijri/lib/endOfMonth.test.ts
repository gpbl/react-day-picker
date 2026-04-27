import { toHijriDate } from "../utils/conversion.js";
import { endOfMonth } from "./endOfMonth.js";

describe("endOfMonth", () => {
  test("returns the last day of the Hijri month", () => {
    expect(toHijriDate(endOfMonth(new Date(2025, 2, 8)))).toEqual({
      year: 1446,
      monthIndex: 8,
      day: 29,
    });
  });
});
