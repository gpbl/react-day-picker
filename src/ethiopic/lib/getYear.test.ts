import { toGregorianDate } from "../utils";

import { getYear } from "./getYear";

describe("getYear", () => {
  test("should return correct Ethiopian year", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 4,
      day: 15
    }); // Greg: Dec 25, 2023
    expect(getYear(date)).toBe(2016);
  });

  test("should handle Ethiopian year boundary correctly", () => {
    // Last day of Ethiopian year 2015
    const lastDay2015 = toGregorianDate({
      year: 2015,
      month: 13,
      day: 6
    }); // Greg: Sep 11, 2023
    expect(getYear(lastDay2015)).toBe(2015);

    // First day of Ethiopian year 2016
    const firstDay2016 = toGregorianDate({
      year: 2016,
      month: 1,
      day: 1
    }); // Greg: Sep 12, 2023
    expect(getYear(firstDay2016)).toBe(2016);
  });
});
