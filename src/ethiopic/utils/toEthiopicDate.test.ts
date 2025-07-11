import { toEthiopicDate } from "./toEthiopicDate";

describe("toEthiopicDate", () => {
  test("converts March 9, 2024 to Ethiopic date correctly", () => {
    expect(toEthiopicDate(new Date(2024, 2, 9))).toEqual({
      year: 2016,
      month: 6,
      day: 30
    });
  });

  test("converts January 1, 2024 to Ethiopic date correctly", () => {
    expect(toEthiopicDate(new Date(2024, 0, 1))).toEqual({
      year: 2016,
      month: 4,
      day: 22
    });
  });

  test("converts Ethiopian New Year (September 11, 2023) to Ethiopic date correctly", () => {
    expect(toEthiopicDate(new Date(2023, 8, 11))).toEqual({
      year: 2015,
      month: 13,
      day: 6
    });
  });

  test("converts Ethiopian New Year (September 10, 2024) to Ethiopic date correctly", () => {
    expect(toEthiopicDate(new Date(2024, 8, 10))).toEqual({
      year: 2016,
      month: 13,
      day: 5
    });
  });

  test("handles Gregorian leap year February 29, 2024 correctly", () => {
    expect(toEthiopicDate(new Date(2024, 1, 29))).toEqual({
      year: 2016,
      month: 6,
      day: 21
    });
  });

  test("handles Pagume (Ethiopian 13th month) September 11, 2024 correctly", () => {
    expect(toEthiopicDate(new Date(2024, 8, 11))).toEqual({
      year: 2016,
      month: 13,
      day: 6
    });
  });

  test("handles January 1, 1900 correctly", () => {
    expect(toEthiopicDate(new Date(1900, 0, 1))).toEqual({
      year: 1892,
      month: 4,
      day: 23
    });
  });

  test("handles June 15, 1800 correctly", () => {
    expect(toEthiopicDate(new Date(1800, 5, 15))).toEqual({
      year: 1792,
      month: 10,
      day: 9
    });
  });
});
