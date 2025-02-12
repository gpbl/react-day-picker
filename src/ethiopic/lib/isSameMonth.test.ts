import { toGreg } from "../utils/ethiopicDateUtils";

import { isSameMonth } from "./isSameMonth";

describe("isSameMonth in Ethiopian calendar", () => {
  test("Should return true for dates in same Ethiopian month", () => {
    const date1 = toGreg({
      Year: 2016,
      Month: 4,
      Day: 1
    }); // Greg: Dec 11, 2023
    const date2 = toGreg({
      Year: 2016,
      Month: 4,
      Day: 30
    }); // Greg: Jan 9, 2024
    expect(isSameMonth(date1, date2)).toBe(true);
  });

  test("Should return false for dates in different Ethiopian months", () => {
    const date1 = toGreg({
      Year: 2016,
      Month: 4,
      Day: 30
    }); // Greg: Jan 9, 2024
    const date2 = toGreg({
      Year: 2016,
      Month: 5,
      Day: 1
    }); // Greg: Jan 10, 2024
    expect(isSameMonth(date1, date2)).toBe(false);
  });

  test("Should handle Ethiopian month boundaries correctly", () => {
    // Same month number but different years
    const date1 = toGreg({
      Year: 2015,
      Month: 13,
      Day: 6
    }); // Greg: Sep 11, 2023
    const date2 = toGreg({
      Year: 2016,
      Month: 13,
      Day: 5
    }); // Greg: Sep 10, 2024
    expect(isSameMonth(date1, date2)).toBe(false);
  });
});
