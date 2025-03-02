import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

import { startOfMonth } from "./startOfMonth";

describe("startOfMonth in Ethiopian calendar", () => {
  test("returns first day of Ethiopian month", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 4,
      day: 15
    }); // Greg: Dec 25, 2023
    const result = startOfMonth(date);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2016,
      month: 4,
      day: 1
    }); // Greg: Dec 11, 2023
  });

  test("maintains year and month", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 7,
      day: 30
    }); // Greg: Apr 7, 2024
    const result = startOfMonth(date);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2016,
      month: 7,
      day: 1
    }); // Greg: Mar 10, 2024
  });

  test("handles Pagume (13th month)", () => {
    const date = toGregorianDate({
      year: 2015,
      month: 13,
      day: 6
    }); // Greg: Sep 11, 2023
    const result = startOfMonth(date);
    const ethResult = toEthiopicDate(result);
    expect(ethResult).toEqual({
      year: 2015,
      month: 13,
      day: 1
    }); // Greg: Sep 6, 2023
  });
});
