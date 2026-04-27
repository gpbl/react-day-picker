import { isSameYear } from "./isSameYear.js";

describe("isSameYear", () => {
  test("returns true for dates in the same Hijri year", () => {
    expect(isSameYear(new Date(2025, 0, 1), new Date(2025, 2, 8))).toBe(true);
  });

  test("returns false for dates in different Hijri years", () => {
    expect(isSameYear(new Date(2025, 2, 8), new Date(2025, 5, 26))).toBe(false);
  });
});
