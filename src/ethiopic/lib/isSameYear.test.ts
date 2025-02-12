import { toGreg } from "../utils/ethiopicDateUtils";

import { isSameYear } from "./isSameYear";

describe("isSameYear in Ethiopian calendar", () => {
  test("Should return true for dates in same Ethiopian year", () => {
    const date1 = toGreg({
      Year: 2016,
      Month: 1,
      Day: 1
    }); // Greg: Sep 12, 2023
    const date2 = toGreg({
      Year: 2016,
      Month: 13,
      Day: 5
    }); // Greg: Sep 10, 2024
    expect(isSameYear(date1, date2)).toBe(true);
  });

  test("Should return false for dates in different Ethiopian years", () => {
    const date1 = toGreg({
      Year: 2015,
      Month: 6,
      Day: 15
    }); // Greg: Feb 23, 2023
    const date2 = toGreg({
      Year: 2016,
      Month: 6,
      Day: 15
    }); // Greg: Feb 23, 2024
    expect(isSameYear(date1, date2)).toBe(false);
  });

  test("Should handle Ethiopian year boundary correctly", () => {
    const lastDayOf2015 = toGreg({
      Year: 2015,
      Month: 13,
      Day: 6
    }); // Greg: Sep 11, 2023
    const firstDayOf2016 = toGreg({
      Year: 2016,
      Month: 1,
      Day: 1
    }); // Greg: Sep 12, 2023
    expect(isSameYear(lastDayOf2015, firstDayOf2016)).toBe(false);
  });
});
