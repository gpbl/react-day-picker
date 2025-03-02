import { toGregorianDate } from "../utils";

import { differenceInCalendarMonths } from "./differenceInCalendarMonths";

describe("differenceInCalendarMonths in Ethiopian calendar", () => {
  test("should calculate difference in months within the same Ethiopian year", () => {
    const date1 = toGregorianDate({
      year: 2016,
      month: 4,
      day: 1
    }); // Greg: Dec 11, 2023
    const date2 = toGregorianDate({
      year: 2016,
      month: 7,
      day: 1
    }); // Greg: Mar 10, 2024
    expect(differenceInCalendarMonths(date2, date1)).toBe(3);
  });

  test("should calculate difference in months across Ethiopian years", () => {
    const date1 = toGregorianDate({
      year: 2015,
      month: 11,
      day: 1
    }); // Greg: Jul 8, 2023
    const date2 = toGregorianDate({
      year: 2016,
      month: 2,
      day: 1
    }); // Greg: Oct 12, 2023
    expect(differenceInCalendarMonths(date2, date1)).toBe(4);
  });

  test("should return zero for same Ethiopian date", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 4,
      day: 15
    }); // Greg: Dec 25, 2023
    expect(differenceInCalendarMonths(date, date)).toBe(0);
  });
});
