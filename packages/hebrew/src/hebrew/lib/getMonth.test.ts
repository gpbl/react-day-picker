import { getMonth } from "./getMonth.js";

const tishrei5785 = new Date(2024, 9, 3);

describe("hebrew getMonth", () => {
  test("returns Hebrew month index", () => {
    expect(getMonth(tishrei5785)).toBe(0);
  });
});
