import { toGregorianDate, toHijriDate } from "../utils/conversion.js";
import { eachYearOfInterval } from "./eachYearOfInterval.js";

describe("eachYearOfInterval", () => {
  describe("when interval is within the supported range", () => {
    test("returns inclusive Hijri years", () => {
      const start = toGregorianDate({ year: 1444, monthIndex: 0, day: 1 });
      const end = toGregorianDate({ year: 1446, monthIndex: 11, day: 29 });

      const observed = eachYearOfInterval({ start, end }).map(
        (date) => toHijriDate(date).year,
      );

      expect(observed).toEqual([1444, 1445, 1446]);
    });
  });

  describe("when interval starts before converter minimum", () => {
    test("starts returned years from Hijri minimum year", () => {
      const end = toGregorianDate({ year: 1344, monthIndex: 0, day: 1 });
      const observed = eachYearOfInterval({
        start: new Date(1900, 0, 1),
        end,
      }).map((date) => toHijriDate(date).year);

      expect(observed).toEqual([1343, 1344]);
    });
  });

  describe("when interval ends after converter maximum", () => {
    test("ends returned years at Hijri maximum year", () => {
      const start = toGregorianDate({ year: 1499, monthIndex: 0, day: 1 });
      const observed = eachYearOfInterval({
        start,
        end: new Date(2100, 0, 1),
      }).map((date) => toHijriDate(date).year);

      expect(observed).toEqual([1499, 1500]);
    });
  });

  describe("when interval is invalid", () => {
    test("returns an empty array", () => {
      expect(
        eachYearOfInterval({
          start: new Date(2025, 0, 2),
          end: new Date(2025, 0, 1),
        }),
      ).toEqual([]);
    });
  });
});
