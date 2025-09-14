import { toEthiopicDate, toGregorianDate } from "../utils";

import { endOfMonth } from "./endOfMonth";

describe("endOfMonth", () => {
  test("should return the last day of a 30-day Ethiopian month", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 4,
      day: 15,
    }); // Greg: Dec 25, 2023
    const result = endOfMonth(date);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2016,
      month: 4,
      day: 30,
    }); // Greg: Jan 9, 2024
  });

  test("should handle Pagume (13th month) correctly in leap and non-leap years", () => {
    // Non-leap year (5 days)
    const nonLeapDate = toGregorianDate({
      year: 2016,
      month: 13,
      day: 1,
    }); // Greg: Sep 6, 2024
    const nonLeapResult = endOfMonth(nonLeapDate);
    const ethNonLeapResult = toEthiopicDate(nonLeapResult);
    expect(ethNonLeapResult).toEqual({
      year: 2016,
      month: 13,
      day: 5,
    }); // Greg: Sep 10, 2024

    // Leap year (6 days)
    const leapDate = toGregorianDate({
      year: 2015,
      month: 13,
      day: 1,
    }); // Greg: Sep 6, 2023
    const leapResult = endOfMonth(leapDate);
    const ethLeapResult = toEthiopicDate(leapResult);
    expect(ethLeapResult).toEqual({
      year: 2015,
      month: 13,
      day: 6,
    }); // Greg: Sep 11, 2023
  });
});
