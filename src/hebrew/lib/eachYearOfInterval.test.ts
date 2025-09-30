import { eachYearOfInterval } from "./eachYearOfInterval";
import { toGregorianDate, toHebrewDate } from "../utils/dateConversion.js";

describe("eachYearOfInterval (Hebrew)", () => {
  test("returns the Hebrew years within the interval", () => {
    const start = toGregorianDate({ year: 5783, monthIndex: 0, day: 1 });
    const end = toGregorianDate({ year: 5785, monthIndex: 0, day: 1 });

    const years = eachYearOfInterval({ start, end });
    const observed = years.map((date) => toHebrewDate(date).year);

    expect(observed).toEqual([5783, 5784, 5785]);
  });

  test("returns empty array when end precedes start", () => {
    const start = toGregorianDate({ year: 5785, monthIndex: 0, day: 1 });
    const end = toGregorianDate({ year: 5784, monthIndex: 0, day: 1 });

    expect(eachYearOfInterval({ start, end })).toEqual([]);
  });
});
