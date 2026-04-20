import { toEthiopicDate, toGregorianDate } from "../utils";

import { addMonths } from "./addMonths";

describe("addMonths", () => {
  test("should add positive months correctly", () => {
    // Test case 1: Adding within same year
    const date1 = toGregorianDate({
      year: 2016,
      month: 4,
      day: 22,
    }); // Greg: Jan 1, 2024
    const result1 = addMonths(date1, 2);
    const ethResult1 = toEthiopicDate(result1);
    expect(ethResult1).toEqual({
      year: 2016,
      month: 6, // Yekatit(6)
      day: 22,
    }); // Greg: Mar 1, 2024

    // Test case 2: Adding across gregorian year boundary
    const date2 = toGregorianDate({
      year: 2016,
      month: 5,
      day: 22,
    }); // Greg: Feb 1, 2024
    const result2 = addMonths(date2, 3);
    const ethResult2 = toEthiopicDate(result2);
    expect(ethResult2).toEqual({
      year: 2016,
      month: 8, // Meyazia(8)
      day: 22,
    }); // Greg: Apr 30, 2024
  });

  test("should add negative months correctly", () => {
    // Test case 1: Subtracting within same year
    const date1 = toGregorianDate({
      year: 2016,
      month: 4,
      day: 21,
    }); // Greg: Dec 31, 2023
    const result1 = addMonths(date1, -2);
    const ethResult1 = toEthiopicDate(result1);
    expect(ethResult1).toEqual({
      year: 2016,
      month: 2, // Tikimt(2)
      day: 21,
    }); // Greg: Oct 31, 2023

    // Test case 2: Subtracting across gregorian year boundary
    const date2 = toGregorianDate({
      year: 2016,
      month: 4,
      day: 21,
    }); // Greg: Dec 31, 2023
    const result2 = addMonths(date2, -3);
    const ethResult2 = toEthiopicDate(result2);
    expect(ethResult2).toEqual({
      year: 2016,
      month: 1, // Meskerem(1)
      day: 21,
    }); // Greg: Oct 1, 2023
  });

  test("should handle day overflow in the 13th month Ethiopian calendar", () => {
    // Test case 2: Day overflow in Pagume (13th month)
    const date2 = toGregorianDate({
      year: 2016,
      month: 12,
      day: 25,
    }); // Greg: Aug 31, 2024
    const result2 = addMonths(date2, 1);
    const ethResult2 = toEthiopicDate(result2);
    expect(ethResult2).toEqual({
      year: 2016,
      month: 13, // Pagume
      day: 5, // Adjusted from 26 to 5 (Pagume has only 5 or 6 days)
    }); // Greg: Sep 5, 2024
  });
});
