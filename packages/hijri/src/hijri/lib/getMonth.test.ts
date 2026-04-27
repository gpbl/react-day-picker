import { getMonth } from "./getMonth.js";

describe("getMonth", () => {
  test("returns the Hijri month index", () => {
    expect(getMonth(new Date(2025, 2, 8))).toBe(8);
  });
});
