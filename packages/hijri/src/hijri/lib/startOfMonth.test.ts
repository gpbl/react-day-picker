import { startOfMonth } from "./startOfMonth.js";

describe("startOfMonth", () => {
  test("returns the first day of the Hijri month", () => {
    expect(startOfMonth(new Date(2025, 2, 8))).toEqual(new Date(2025, 2, 1));
  });
});
