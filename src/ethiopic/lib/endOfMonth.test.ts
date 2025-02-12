import { toEth, toGreg } from "../utils/ethiopicDateUtils";

import { endOfMonth } from "./endOfMonth";

describe("endOfMonth in Ethiopian calendar", () => {
  test("Should return the last day of a 30-day Ethiopian month", () => {
    const date = toGreg({
      Year: 2016,
      Month: 4,
      Day: 15
    }); // Greg: Dec 25, 2023
    const result = endOfMonth(date);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2016,
      Month: 4,
      Day: 30
    }); // Greg: Jan 9, 2024
  });

  test("Should handle Pagume (13th month) correctly in leap and non-leap years", () => {
    // Non-leap year (5 days)
    const nonLeapDate = toGreg({
      Year: 2016,
      Month: 13,
      Day: 1
    }); // Greg: Sep 6, 2024
    const nonLeapResult = endOfMonth(nonLeapDate);
    const ethNonLeapResult = toEth(nonLeapResult);
    expect(ethNonLeapResult).toEqual({
      Year: 2016,
      Month: 13,
      Day: 5
    }); // Greg: Sep 10, 2024

    // Leap year (6 days)
    const leapDate = toGreg({
      Year: 2015,
      Month: 13,
      Day: 1
    }); // Greg: Sep 6, 2023
    const leapResult = endOfMonth(leapDate);
    const ethLeapResult = toEth(leapResult);
    expect(ethLeapResult).toEqual({
      Year: 2015,
      Month: 13,
      Day: 6
    }); // Greg: Sep 11, 2023
  });
});
