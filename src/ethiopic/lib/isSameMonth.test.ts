import { toGregorianDate } from "../utils";

import { isSameMonth } from "./isSameMonth";

describe("isSameMonth", () => {
  test("should return true for dates in same Ethiopian month", () => {
    const date1 = toGregorianDate({
      year: 2016,
      month: 4,
      day: 1
    }); // Greg: Dec 11, 2023
    const date2 = toGregorianDate({
      year: 2016,
      month: 4,
      day: 30
    }); // Greg: Jan 9, 2024
    expect(isSameMonth(date1, date2)).toBe(true);
  });

  test("should return false for dates in different Ethiopian months", () => {
    const date1 = toGregorianDate({
      year: 2016,
      month: 4,
      day: 30
    }); // Greg: Jan 9, 2024
    const date2 = toGregorianDate({
      year: 2016,
      month: 5,
      day: 1
    }); // Greg: Jan 10, 2024
    expect(isSameMonth(date1, date2)).toBe(false);
  });

  test("should handle Ethiopian month boundaries correctly", () => {
    // Same month number but different years
    const date1 = toGregorianDate({
      year: 2015,
      month: 13,
      day: 6
    }); // Greg: Sep 11, 2023
    const date2 = toGregorianDate({
      year: 2016,
      month: 13,
      day: 5
    }); // Greg: Sep 10, 2024
    expect(isSameMonth(date1, date2)).toBe(false);
  });
});
