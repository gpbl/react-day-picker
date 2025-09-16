import { addMonths } from "./addMonths.js";
import { differenceInCalendarMonths } from "./differenceInCalendarMonths.js";

describe("hebrew differenceInCalendarMonths", () => {
  test("returns month distance in Hebrew calendar", () => {
    const nisan5784 = new Date(2024, 3, 23);
    const twoMonthsLater = addMonths(nisan5784, 2);
    expect(differenceInCalendarMonths(twoMonthsLater, nisan5784)).toBe(2);
  });
});
