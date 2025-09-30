import { toEthiopicDate, toGregorianDate } from "../utils/index.js";
import { eachYearOfInterval } from "./eachYearOfInterval";

describe("eachYearOfInterval (Ethiopic)", () => {
  test("returns the Ethiopic years within the interval", () => {
    const start = toGregorianDate({ year: 2014, month: 1, day: 1 });
    const end = toGregorianDate({ year: 2016, month: 13, day: 5 });

    const years = eachYearOfInterval({ start, end });
    const observed = years.map((date) => toEthiopicDate(date).year);

    expect(observed).toEqual([2014, 2015, 2016]);
  });

  test("returns empty array when end precedes start", () => {
    const start = toGregorianDate({ year: 2016, month: 1, day: 1 });
    const end = toGregorianDate({ year: 2015, month: 13, day: 5 });

    const years = eachYearOfInterval({ start, end });

    expect(years).toEqual([]);
  });
});
