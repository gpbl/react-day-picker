import { toGregorianDate, toHijriDate } from "../utils/conversion.js";
import { eachMonthOfInterval } from "./eachMonthOfInterval.js";

describe("eachMonthOfInterval", () => {
  describe("when interval is within the supported range", () => {
    test("returns each Hijri month start in the interval", () => {
      const start = toGregorianDate({ year: 1446, monthIndex: 7, day: 1 });
      const end = toGregorianDate({ year: 1446, monthIndex: 9, day: 15 });

      const observed = eachMonthOfInterval({ start, end }).map((date) => {
        const hijri = toHijriDate(date);
        return `${hijri.year}-${hijri.monthIndex + 1}-${hijri.day}`;
      });

      expect(observed).toEqual(["1446-8-1", "1446-9-1", "1446-10-1"]);
    });
  });

  describe("when interval starts before converter minimum", () => {
    test("clamps the first returned month to Hijri minimum", () => {
      const end = toGregorianDate({ year: 1343, monthIndex: 2, day: 1 });
      const months = eachMonthOfInterval({
        start: new Date(1900, 0, 1),
        end,
      });

      expect(toHijriDate(months[0])).toEqual({
        year: 1343,
        monthIndex: 0,
        day: 1,
      });
    });
  });

  describe("when interval ends after converter maximum", () => {
    test("clamps the last returned month to Hijri maximum month", () => {
      const start = toGregorianDate({ year: 1500, monthIndex: 10, day: 1 });
      const months = eachMonthOfInterval({
        start,
        end: new Date(2100, 0, 1),
      });

      expect(toHijriDate(months[months.length - 1])).toEqual({
        year: 1500,
        monthIndex: 11,
        day: 1,
      });
    });
  });

  describe("when interval is invalid", () => {
    test("throws a RangeError", () => {
      expect(() =>
        eachMonthOfInterval({
          start: new Date(2025, 0, 2),
          end: new Date(2025, 0, 1),
        }),
      ).toThrow(RangeError);
    });
  });
});
