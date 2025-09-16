import { getYear } from "./getYear.js";

const muharrram = new Date(2024, 6, 7);

describe("hijri getYear", () => {
  test("returns hijri year", () => {
    expect(getYear(muharrram)).toBe(1446);
  });
});
