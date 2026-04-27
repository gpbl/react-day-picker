import { differenceInCalendarMonths } from "./differenceInCalendarMonths.js";

describe("differenceInCalendarMonths", () => {
  test("returns month distance in Hijri calendar", () => {
    expect(
      differenceInCalendarMonths(new Date(2025, 2, 8), new Date(2025, 0, 1)),
    ).toBe(2);
  });

  test("handles Hijri year boundaries", () => {
    expect(
      differenceInCalendarMonths(new Date(2025, 5, 26), new Date(2025, 2, 8)),
    ).toBe(4);
  });
});
