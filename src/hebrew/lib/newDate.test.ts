import { newDate } from "./newDate.js";

describe("hebrew newDate", () => {
  test("creates Gregorian equivalent from Hebrew date", () => {
    const tishrei5785 = newDate(5785, 0, 1);
    expect(tishrei5785.getFullYear()).toBe(2024);
    expect(tishrei5785.getMonth()).toBe(9);
    expect(tishrei5785.getDate()).toBe(3);
  });
});
