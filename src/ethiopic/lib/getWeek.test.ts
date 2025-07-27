import { toGregorianDate } from "../utils";

import { getWeek } from "./getWeek";

describe("getWeek", () => {
  test("should return 1 for first week of year", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 1,
      day: 1
    }); // Greg: Sep 12, 2023
    expect(getWeek(date)).toBe(1);
  });

  test("should handle dates in last month of year to be either 52 or 1", () => {
    // part of the last week of the previous year
    const date52 = toGregorianDate({
      year: 2016,
      month: 13,
      day: 1
    }); // Greg: Sep 10, 202
    expect(getWeek(date52)).toBe(52);

    // part of the first week of the new year
    const date1 = toGregorianDate({
      year: 2016,
      month: 13,
      day: 5
    }); // Greg: Sep 10, 202
    expect(getWeek(date1)).toBe(1);
  });

  test("should handle dates at week boundaries", () => {
    // Sunday week 1
    const sunday = toGregorianDate({
      year: 2016,
      month: 1,
      day: 6
    }); // Greg: Sep 17, 2023
    expect(getWeek(sunday)).toBe(1);

    // Monday week 2
    const monday = toGregorianDate({
      year: 2016,
      month: 1,
      day: 7
    }); // Greg: Sep 18, 2023
    expect(getWeek(monday)).toBe(2);
  });

  test("should handle dates in middle of year", () => {
    const midYear = toGregorianDate({
      year: 2016,
      month: 6,
      day: 15
    }); // Greg: Feb 23, 2024
    expect(getWeek(midYear)).toBe(24);
  });
});
