import { isSameYear } from "./isSameYear.js";

describe("hebrew isSameYear", () => {
  test("compares Hebrew years", () => {
    const nisan5784 = new Date(2024, 3, 23);
    const otherNisan = new Date(2024, 3, 10);
    const cheshvan5785 = new Date(2024, 10, 10);
    expect(isSameYear(nisan5784, otherNisan)).toBe(true);
    expect(isSameYear(nisan5784, cheshvan5785)).toBe(false);
  });
});
