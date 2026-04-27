import { getYear } from "./getYear.js";

describe("getYear", () => {
  test("returns the Hijri year", () => {
    expect(getYear(new Date(2025, 2, 8))).toBe(1446);
  });
});
