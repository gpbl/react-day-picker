import { getMonth } from "./getMonth.js";

const muharrram = new Date(2024, 6, 7);

describe("hijri getMonth", () => {
  test("returns zero-based hijri month index", () => {
    expect(getMonth(muharrram)).toBe(0);
  });
});
