import { toHijriDate } from "../utils/conversion.js";
import { newDate } from "./newDate.js";

describe("newDate", () => {
  test("creates the Gregorian equivalent for a Hijri date", () => {
    expect(newDate(1446, 8, 8)).toEqual(new Date(2025, 2, 8));
  });

  test("normalizes invalid Hijri month and day values", () => {
    expect(toHijriDate(newDate(1446, 14, 60))).toEqual({
      year: 1447,
      monthIndex: 2,
      day: 30,
    });
  });
});
