import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

import { addYears } from "./addYears";

describe("addYears in Ethiopian calendar", () => {
  test("should add positive years correctly in Ethiopian calendar", () => {
    const date = toGregorianDate({
      year: 2015,
      month: 4,
      day: 22
    }); // Greg: Jan 1, 2023
    const result = addYears(date, 2);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2017,
      month: 4, // Tahsas(4)
      day: 22
    }); // Greg: Jan 1, 2025
  });

  test("should add negative years correctly in Ethiopian calendar", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 4,
      day: 21
    }); // Greg: Dec 31, 2023
    const result = addYears(date, -2);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2014,
      month: 4, // Tahsas(4)
      day: 21
    }); // Greg: Dec 31, 2021
  });

  test("should maintain month and day when adding years from leap year in Ethiopian calendar", () => {
    const date = toGregorianDate({
      year: 2015,
      month: 13, // Pagume
      day: 6
    }); // Greg: Sep 6, 2023, Leap year day
    const result = addYears(date, 1);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2016,
      month: 13, // Pagume
      day: 5
    }); // Greg: Sep 6, 2024
  });
});
