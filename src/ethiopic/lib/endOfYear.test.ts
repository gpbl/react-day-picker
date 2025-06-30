import { toEthiopicDate, toGregorianDate } from "../utils";

import { endOfYear } from "./endOfYear";

describe("endOfYear", () => {
  test("should return last day of Ethiopian year for non-leap year", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 1,
      day: 1
    }); // Greg: Sep 12, 2023
    const result = endOfYear(date);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2016,
      month: 13, // Pagume
      day: 5
    }); // Greg: Sep 10, 2024
  });

  test("should return last day of Ethiopian year for leap year", () => {
    const date = toGregorianDate({
      year: 2015,
      month: 1,
      day: 1
    }); // Greg: Sep 12, 2022
    const result = endOfYear(date);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2015,
      month: 13, // Pagume
      day: 6
    }); // Greg: Sep 11, 2023
  });
});
