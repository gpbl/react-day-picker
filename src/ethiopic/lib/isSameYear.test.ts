import { toGregorianDate } from "../utils";

import { isSameYear } from "./isSameYear";

describe("isSameYear", () => {
  test("should return true for dates in same Ethiopian year", () => {
    const date1 = toGregorianDate({
      year: 2016,
      month: 1,
      day: 1
    }); // Greg: Sep 12, 2023
    const date2 = toGregorianDate({
      year: 2016,
      month: 13,
      day: 5
    }); // Greg: Sep 10, 2024
    expect(isSameYear(date1, date2)).toBe(true);
  });

  test("should return false for dates in different Ethiopian years", () => {
    const date1 = toGregorianDate({
      year: 2015,
      month: 6,
      day: 15
    }); // Greg: Feb 23, 2023
    const date2 = toGregorianDate({
      year: 2016,
      month: 6,
      day: 15
    }); // Greg: Feb 23, 2024
    expect(isSameYear(date1, date2)).toBe(false);
  });

  test("should handle Ethiopian year boundary correctly", () => {
    const lastDayOf2015 = toGregorianDate({
      year: 2015,
      month: 13,
      day: 6
    }); // Greg: Sep 11, 2023
    const firstDayOf2016 = toGregorianDate({
      year: 2016,
      month: 1,
      day: 1
    }); // Greg: Sep 12, 2023
    expect(isSameYear(lastDayOf2015, firstDayOf2016)).toBe(false);
  });
});
