import { toEthiopicDate } from "../utils/index.js";

import { newDate } from "./newDate";

describe("newDate", () => {
  test("creates date with valid Ethiopian values", () => {
    const date = newDate(2016, 4, 15); // Tahsas 15, 2016
    const ethDate = toEthiopicDate(date);
    expect(ethDate).toEqual({
      year: 2016,
      month: 5, // Tahsas
      day: 15,
    }); // Greg: Dec 25, 2023
  });

  test("handles Pagume (13th month)", () => {
    // Non-leap year Pagume
    const nonLeapDate = newDate(2016, 12, 5);
    const ethNonLeapDate = toEthiopicDate(nonLeapDate);
    expect(ethNonLeapDate).toEqual({
      year: 2016,
      month: 13, // Pagume
      day: 5,
    }); // Greg: Sep 10, 2024

    // Leap year Pagume
    const leapDate = newDate(2015, 12, 6);
    const ethLeapDate = toEthiopicDate(leapDate);
    expect(ethLeapDate).toEqual({
      year: 2015,
      month: 13, // Pagume
      day: 6,
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
