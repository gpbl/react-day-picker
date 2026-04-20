import { toGregorianDate } from "../utils";

import { setMonth } from "./setMonth";

describe("setMonth", () => {
  test("should set month to a regular month", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 1, // Meskerem
      day: 1,
    }); // Greg: Sep 12, 2023

    const result = setMonth(date, 3); // Set to 4th month (Tahsas)
    expect(result).toEqual(
      toGregorianDate({
        year: 2016,
        month: 4,
        day: 1,
      }),
    );
  });

  test("should handle setting to Pagume (13th month)", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 1,
      day: 1,
    }); // Greg: Sep 12, 2023

    const result = setMonth(date, 12); // Set to Pagume (0-based index)
    expect(result).toEqual(
      toGregorianDate({
        year: 2016,
        month: 13,
        day: 1,
      }),
    );
  });

  test("should preserve the day when setting month", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 1,
      day: 15,
    }); // Greg: Sep 26, 2023

    const result = setMonth(date, 5); // Set to 6th month (Yekatit)
    expect(result).toEqual(
      toGregorianDate({
        year: 2016,
        month: 6,
        day: 15,
      }),
    );
  });

  test("should clamp the day when switching to Pagume", () => {
    const date = toGregorianDate({
      year: 2016,
      month: 2,
      day: 30,
    });

    const result = setMonth(date, 12);
    expect(result).toEqual(
      toGregorianDate({
        year: 2016,
        month: 13,
        day: 5,
      }),
    );
  });

  test("should clamp to six days in leap year Pagume", () => {
    const date = toGregorianDate({
      year: 2015,
      month: 2,
      day: 30,
    });

    const result = setMonth(date, 12);
    expect(result).toEqual(
      toGregorianDate({
        year: 2015,
        month: 13,
        day: 6,
      }),
    );
  });
});
