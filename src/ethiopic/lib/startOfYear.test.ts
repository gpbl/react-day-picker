import { toEth, toGreg } from "../utils/ethiopicDateUtils";

import { startOfYear } from "./startOfYear";

describe("startOfYear in Ethiopian calendar", () => {
  test("returns first day of Ethiopian year", () => {
    const date = toGreg({
      Year: 2016,
      Month: 6,
      Day: 15
    }); // Greg: Feb 23, 2024
    const result = startOfYear(date);
    const ethResult = toEth(result);
    expect(ethResult).toEqual({
      Year: 2016,
      Month: 1,
      Day: 1
    }); // Greg: Sep 12, 2023
  });

  test("handles leap year correctly", () => {
    // From middle of leap year
    const leapDate = toGreg({
      Year: 2015,
      Month: 7,
      Day: 15
    }); // Greg: Mar 24, 2023
    const leapResult = startOfYear(leapDate);
    const ethLeapResult = toEth(leapResult);
    expect(ethLeapResult).toEqual({
      Year: 2015,
      Month: 1,
      Day: 1
    }); // Greg: Sep 12, 2022

    // From middle of non-leap year
    const nonLeapDate = toGreg({
      Year: 2016,
      Month: 7,
      Day: 15
    }); // Greg: Mar 24, 2024
    const nonLeapResult = startOfYear(nonLeapDate);
    const ethNonLeapResult = toEth(nonLeapResult);
    expect(ethNonLeapResult).toEqual({
      Year: 2016,
      Month: 1,
      Day: 1
    }); // Greg: Sep 12, 2023
  });
});
