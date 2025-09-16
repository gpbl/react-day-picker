import { differenceInCalendarMonths } from "./differenceInCalendarMonths.js";

describe("hijri differenceInCalendarMonths", () => {
  test("calculates difference across years", () => {
    const start = new Date(2024, 6, 7);
    const end = new Date(2025, 4, 28);
    expect(differenceInCalendarMonths(end, start)).toBe(11);
  });
});
