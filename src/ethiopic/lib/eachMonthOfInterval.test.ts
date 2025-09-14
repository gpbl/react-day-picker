import { toGregorianDate } from "../utils";

import { eachMonthOfInterval } from "./eachMonthOfInterval";

describe("eachMonthOfInterval", () => {
  test("should return an array of dates representing the start of each month in the interval", () => {
    const start = toGregorianDate({
      year: 2016,
      month: 4,
      day: 1,
    }); // January 1, 2024 (2016-04-01 E.C.)
    const end = toGregorianDate({
      year: 2016,
      month: 6,
      day: 30,
    }); // March 9, 2024 (2016-06-30 E.C.)

    const result = eachMonthOfInterval({ start, end });

    expect(result).toEqual([
      toGregorianDate({ year: 2016, month: 4, day: 1 }), // 2016-04-01 E.C.
      toGregorianDate({ year: 2016, month: 5, day: 1 }), // 2016-05-01 E.C.
      toGregorianDate({ year: 2016, month: 6, day: 1 }), // 2016-06-01 E.C.
    ]);
  });

  test("should handle intervals spanning Ethiopian new year", () => {
    const start = toGregorianDate({
      year: 2015,
      month: 13,
      day: 1,
    }); // September 1, 2023 (2015-13-01 E.C.)
    const end = toGregorianDate({
      year: 2016,
      month: 2,
      day: 30,
    }); // October 15, 2023 (2016-02-30 E.C.)

    const result = eachMonthOfInterval({ start, end });

    expect(result).toEqual([
      toGregorianDate({ year: 2015, month: 13, day: 1 }), // 2015-13-01 E.C.
      toGregorianDate({ year: 2016, month: 1, day: 1 }), // 2016-01-01 E.C.
      toGregorianDate({ year: 2016, month: 2, day: 1 }), // 2016-02-01 E.C.
    ]);
  });

  test("should handle single month intervals", () => {
    const start = toGregorianDate({
      year: 2016,
      month: 4,
      day: 1,
    }); // 2016-04-01 E.C.
    const end = toGregorianDate({
      year: 2016,
      month: 4,
      day: 30,
    }); // 2016-04-30 E.C.

    const result = eachMonthOfInterval({ start, end });

    expect(result).toEqual([
      toGregorianDate({ year: 2016, month: 4, day: 1 }), // 2016-04-01 E.C.
    ]);
  });

  test("should handle intervals spanning multiple years", () => {
    const start = toGregorianDate({
      year: 2016,
      month: 10,
      day: 1,
    }); // 2016-01-01 E.C.
    const end = toGregorianDate({
      year: 2017,
      month: 2,
      day: 5,
    }); // 2016-13-05 E.C.

    const result = eachMonthOfInterval({ start, end });

    // Should return 13 dates (one for each Ethiopian month in the year)
    expect(result).toHaveLength(6);
    expect(result[0]).toEqual(
      toGregorianDate({ year: 2016, month: 10, day: 1 }),
    ); // First month
    expect(result[5]).toEqual(
      toGregorianDate({ year: 2017, month: 2, day: 1 }),
    ); // Pagume
  });
});
