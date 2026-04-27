import { isSameMonth } from "./isSameMonth.js";

describe("isSameMonth", () => {
  test("returns true for dates in the same Hijri month", () => {
    expect(isSameMonth(new Date(2025, 2, 8), new Date(2025, 2, 29))).toBe(true);
  });

  test("returns false for dates in different Hijri months", () => {
    expect(isSameMonth(new Date(2025, 2, 8), new Date(2025, 2, 30))).toBe(
      false,
    );
  });
});
