import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

import { setYear } from "./setYear";

describe("setYear", () => {
  test("sets year correctly", () => {
    const date = toGregorianDate({
      year: 2015,
      month: 4,
      day: 15,
    }); // Greg: Dec 25, 2022
    const result = setYear(date, 2016);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2016,
      month: 4,
      day: 15,
    }); // Greg: Dec 25, 2023
  });

  test("maintains month and day when possible", () => {
    const date = toGregorianDate({
      year: 2015,
      month: 7,
      day: 21,
    }); // Greg: Mar 30, 2023
    const result = setYear(date, 2016);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2016,
      month: 7,
      day: 21,
    }); // Greg: Mar 29, 2024
  });

  test("adjusts day for leap year changes", () => {
    // From leap year to non-leap year (Pagume 6 -> Pagume 5)
    const leapDate = toGregorianDate({
      year: 2015,
      month: 13,
      day: 6,
    }); // Greg: Sep 11, 2023
    const nonLeapResult = setYear(leapDate, 2016);
    const ethNonLeapResult = toEthiopicDate(nonLeapResult);
    expect(ethNonLeapResult).toEqual({
      year: 2016,
      month: 13,
      day: 5,
    }); // Greg: Sep 10, 2024

    // From non-leap year to leap year (maintains Pagume 5)
    const nonLeapDate = toGregorianDate({
      year: 2016,
      month: 13,
      day: 5,
    }); // Greg: Sep 10, 2024
    const leapResult = setYear(nonLeapDate, 2015);
    const ethLeapResult = toEthiopicDate(leapResult);
    expect(ethLeapResult).toEqual({
      year: 2015,
      month: 13,
      day: 5,
    }); // Greg: Sep 10, 2023
  });
});
