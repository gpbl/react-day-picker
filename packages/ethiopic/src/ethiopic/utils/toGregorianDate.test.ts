import type { EthiopicDate } from "./EthiopicDate";
import { toGregorianDate } from "./toGregorianDate";

describe("toGregorianDate", () => {
  test("convert an Ethiopic date to the correct Gregorian date", () => {
    const ethiopicDate: EthiopicDate = { year: 2015, month: 1, day: 1 };
    const gregorianDate = toGregorianDate(ethiopicDate);
    expect(gregorianDate).toEqual(new Date(2022, 8, 11)); // September 11, 2022
  });

  test("handle leap years correctly", () => {
    const ethiopicDate: EthiopicDate = { year: 2015, month: 13, day: 6 };
    const gregorianDate = toGregorianDate(ethiopicDate);
    expect(gregorianDate).toEqual(new Date(2023, 8, 11)); // September 11, 2023
  });

  test("handle the last day of the year correctly", () => {
    const ethiopicDate: EthiopicDate = { year: 2014, month: 13, day: 5 };
    const gregorianDate = toGregorianDate(ethiopicDate);
    expect(gregorianDate).toEqual(new Date(2022, 8, 10)); // September 10, 2022
  });

  test("handle the first day of the year correctly", () => {
    const ethiopicDate: EthiopicDate = { year: 2014, month: 1, day: 1 };
    const gregorianDate = toGregorianDate(ethiopicDate);
    expect(gregorianDate).toEqual(new Date(2021, 8, 11)); // September 11, 2021
  });

  test("handle invalid dates gracefully", () => {
    const invalidDate: EthiopicDate = { year: 2015, month: 14, day: 1 };
    expect(() => toGregorianDate(invalidDate)).toThrow();
  });

  test("handle edge cases for month and day values", () => {
    // Test month 13 with regular year (5 days)
    const pagume: EthiopicDate = { year: 2014, month: 13, day: 1 };
    expect(toGregorianDate(pagume)).toEqual(new Date(2022, 8, 6)); // September 6, 2022

    // Test last day of a regular month
    const lastDayOfMonth: EthiopicDate = { year: 2015, month: 1, day: 30 };
    expect(toGregorianDate(lastDayOfMonth)).toEqual(new Date(2022, 9, 10)); // October 10, 2022
  });
});
