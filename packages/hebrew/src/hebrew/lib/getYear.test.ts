import { getYear } from "./getYear.js";

const tishrei5785 = new Date(2024, 9, 3);

describe("hebrew getYear", () => {
  test("returns Hebrew year number", () => {
    expect(getYear(tishrei5785)).toBe(5785);
  });
});
