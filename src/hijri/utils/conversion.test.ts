import { toGregorianDate, toHijriDate } from "./conversion.js";

describe("toHijriDate", () => {
  describe("when the Gregorian date is outside converter range", () => {
    test("clamps dates before 1924-08-01 to 1343-01-01", () => {
      const hijri = toHijriDate(new Date(1924, 6, 31));

      expect(hijri).toEqual({ year: 1343, monthIndex: 0, day: 1 });
    });

    test("clamps dates after 2077-11-16 to 1500-12-30", () => {
      const hijri = toHijriDate(new Date(2077, 10, 17));

      expect(hijri).toEqual({ year: 1500, monthIndex: 11, day: 30 });
    });
  });
});

describe("toGregorianDate", () => {
  describe("when the Hijri date is outside converter range", () => {
    test("clamps dates before 1343-01-01 to 1924-08-01", () => {
      const date = toGregorianDate({ year: 1342, monthIndex: 11, day: 30 });

      expect(date).toEqual(new Date(1924, 7, 1));
    });

    test("clamps dates after 1500-12-30 to 2077-11-16", () => {
      const date = toGregorianDate({ year: 1501, monthIndex: 0, day: 1 });

      expect(date).toEqual(new Date(2077, 10, 16));
    });
  });

  describe("when the Hijri date has invalid month/day values", () => {
    test("normalizes and returns a valid Gregorian date", () => {
      const date = toGregorianDate({ year: 1446, monthIndex: 14, day: 60 });
      const roundTrip = toHijriDate(date);

      expect(Number.isNaN(date.getTime())).toBe(false);
      expect(roundTrip.year).toBe(1447);
      expect(roundTrip.monthIndex).toBe(2);
      expect(roundTrip.day).toBeLessThanOrEqual(30);
    });
  });
});
