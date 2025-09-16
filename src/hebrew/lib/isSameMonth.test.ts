import { isSameMonth } from "./isSameMonth.js";

describe("hebrew isSameMonth", () => {
  test("compares Hebrew month", () => {
    const nisan5784 = new Date(2024, 3, 23);
    const otherNisan = new Date(2024, 3, 10);
    const cheshvan = new Date(2024, 10, 10);
    expect(isSameMonth(nisan5784, otherNisan)).toBe(true);
    expect(isSameMonth(nisan5784, cheshvan)).toBe(false);
  });
});
