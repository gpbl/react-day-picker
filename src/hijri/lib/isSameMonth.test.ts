import { isSameMonth } from "./isSameMonth.js";

describe("hijri isSameMonth", () => {
  test("compares hijri month", () => {
    const a = new Date(2024, 6, 7);
    const b = new Date(2024, 6, 15);
    expect(isSameMonth(a, b)).toBe(true);
    const c = new Date(2024, 7, 5);
    expect(isSameMonth(a, c)).toBe(false);
  });
});
