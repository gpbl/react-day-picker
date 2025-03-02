import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

import { startOfYear } from "./startOfYear";

describe("startOfYear in Ethiopian calendar", () => {
  test("returns first day of Ethiopian year", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 6,
      day: 15
    }); // Greg: Feb 23, 2024
    const result = startOfYear(date);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2016,
      month: 1,
      day: 1
    }); // Greg: Sep 12, 2023
  });

  test("handles leap year correctly", () => {
    // From middle of leap year
    const leapDate = toGregorianDate({
      year: 2015,
      month: 7,
      day: 15
    }); // Greg: Mar 24, 2023
    const leapResult = startOfYear(leapDate);
    const ethLeapResult = toEthiopicDate(leapResult);
    expect(ethLeapResult).toEqual({
      year: 2015,
      month: 1,
      day: 1
    }); // Greg: Sep 12, 2022

    // From middle of non-leap year
    const nonLeapDate = toGregorianDate({
      year: 2016,
      month: 7,
      day: 15
    }); // Greg: Mar 24, 2024
    const nonLeapResult = startOfYear(nonLeapDate);
    const ethNonLeapResult = toEthiopicDate(nonLeapResult);
    expect(ethNonLeapResult).toEqual({
      year: 2016,
      month: 1,
      day: 1
    }); // Greg: Sep 12, 2023
  });
});
