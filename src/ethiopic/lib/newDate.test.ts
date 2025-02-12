import { toEth } from "../utils/ethiopicDateUtils";

import { newDate } from "./newDate";

describe("newDate in Ethiopian calendar", () => {
  test("creates date with valid Ethiopian values", () => {
    const date = newDate(2016, 4, 15); // Tahsas 15, 2016
    const ethDate = toEth(date);
    expect(ethDate).toEqual({
      Year: 2016,
      Month: 5, // Tahsas
      Day: 15
    }); // Greg: Dec 25, 2023
  });

  test("handles Pagume (13th month)", () => {
    // Non-leap year Pagume
    const nonLeapDate = newDate(2016, 12, 5);
    const ethNonLeapDate = toEth(nonLeapDate);
    expect(ethNonLeapDate).toEqual({
      Year: 2016,
      Month: 13, // Pagume
      Day: 5
    }); // Greg: Sep 10, 2024

    // Leap year Pagume
    const leapDate = newDate(2015, 12, 6);
    const ethLeapDate = toEth(leapDate);
    expect(ethLeapDate).toEqual({
      Year: 2015,
      Month: 13, // Pagume
      Day: 6
    }); // Greg: Sep 11, 2023
  });

  test("throws error for invalid month and day", () => {
    //invalid month
    expect(() => newDate(2016, 14, 1)).toThrow();
    //invalid day
    expect(() => newDate(2016, 13, 7)).toThrow();
    //invalid month and day
    expect(() => newDate(2016, 5, 32)).toThrow();
    //invalid month and day
    expect(() => newDate(2016, -1, -1)).toThrow();
    //not a leap year
    expect(() => newDate(2016, 13, 6)).toThrow();
  });
});
