import { toEth, toGreg } from "../utils/ethiopicDateUtils";

import { addYears } from "./addYears";

describe("addYears in Ethiopian calendar", () => {
  test("should add positive years correctly in Ethiopian calendar", () => {
    const date = toGreg({
      Year: 2015,
      Month: 4,
      Day: 22
    }); // Greg: Jan 1, 2023
    const result = addYears(date, 2);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2017,
      Month: 4, // Tahsas(4)
      Day: 22
    }); // Greg: Jan 1, 2025
  });

  test("should add negative years correctly in Ethiopian calendar", () => {
    const date = toGreg({
      Year: 2016,
      Month: 4,
      Day: 21
    }); // Greg: Dec 31, 2023
    const result = addYears(date, -2);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2014,
      Month: 4, // Tahsas(4)
      Day: 21
    }); // Greg: Dec 31, 2021
  });

  test("should maintain month and day when adding years from leap year in Ethiopian calendar", () => {
    const date = toGreg({
      Year: 2015,
      Month: 13, // Pagume
      Day: 6
    }); // Greg: Sep 6, 2023, Leap year day
    const result = addYears(date, 1);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2016,
      Month: 13, // Pagume
      Day: 5
    }); // Greg: Sep 6, 2024
  });
});
