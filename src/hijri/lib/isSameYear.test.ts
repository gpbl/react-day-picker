import { isSameYear } from "./isSameYear.js";

describe("hijri isSameYear", () => {
  test("compares hijri years", () => {
    const a = new Date(2024, 9, 3);
    const b = new Date(2024, 11, 1);
    expect(isSameYear(a, b)).toBe(true);
    const c = new Date(2025, 6, 1);
    expect(isSameYear(a, c)).toBe(false);
  });
});
