import { startOfYear } from "./startOfYear.js";

describe("startOfYear", () => {
  test("returns the first day of the Hijri year", () => {
    expect(startOfYear(new Date(2025, 2, 8))).toEqual(new Date(2024, 6, 7));
  });
});
