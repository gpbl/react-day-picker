import {
  clampGregorianDate,
  clampHijriDate,
  GREGORIAN_MAX_DATE,
  GREGORIAN_MIN_DATE,
  wasGregorianDateClamped,
  wasHijriDateClamped,
} from "./range.js";

describe("clampGregorianDate", () => {
  describe("when date is before converter minimum", () => {
    test("returns Gregorian minimum", () => {
      expect(clampGregorianDate(new Date(1900, 0, 1))).toEqual(
        new Date(GREGORIAN_MIN_DATE),
      );
    });
  });

  describe("when date is after converter maximum", () => {
    test("returns Gregorian maximum", () => {
      expect(clampGregorianDate(new Date(2100, 0, 1))).toEqual(
        new Date(GREGORIAN_MAX_DATE),
      );
    });
  });

  describe("when date is already in range", () => {
    test("returns the same date instance", () => {
      const date = new Date(2025, 0, 1);

      expect(clampGregorianDate(date)).toBe(date);
    });
  });
});

describe("wasGregorianDateClamped", () => {
  test("returns true for a date below minimum", () => {
    expect(wasGregorianDateClamped(new Date(1900, 0, 1))).toBe(true);
  });

  test("returns false for a date in range", () => {
    expect(wasGregorianDateClamped(new Date(2025, 0, 1))).toBe(false);
  });
});

describe("clampHijriDate", () => {
  describe("when month index overflows", () => {
    test("normalizes month into next Hijri year", () => {
      expect(clampHijriDate({ year: 1446, monthIndex: 12, day: 10 })).toEqual({
        year: 1447,
        monthIndex: 0,
        day: 10,
      });
    });
  });

  describe("when month index underflows", () => {
    test("normalizes month into previous Hijri year", () => {
      expect(clampHijriDate({ year: 1446, monthIndex: -1, day: 10 })).toEqual({
        year: 1445,
        monthIndex: 11,
        day: 10,
      });
    });
  });

  describe("when day is below 1", () => {
    test("clamps day to 1", () => {
      expect(clampHijriDate({ year: 1446, monthIndex: 0, day: 0 })).toEqual({
        year: 1446,
        monthIndex: 0,
        day: 1,
      });
    });
  });

  describe("when day is above 30", () => {
    test("clamps day to 30", () => {
      expect(clampHijriDate({ year: 1446, monthIndex: 0, day: 60 })).toEqual({
        year: 1446,
        monthIndex: 0,
        day: 30,
      });
    });
  });

  describe("when date is below Hijri minimum", () => {
    test("returns Hijri minimum", () => {
      expect(clampHijriDate({ year: 1342, monthIndex: 11, day: 30 })).toEqual({
        year: 1343,
        monthIndex: 0,
        day: 1,
      });
    });
  });

  describe("when date is above Hijri maximum", () => {
    test("returns Hijri maximum", () => {
      expect(clampHijriDate({ year: 1501, monthIndex: 0, day: 1 })).toEqual({
        year: 1500,
        monthIndex: 11,
        day: 30,
      });
    });
  });
});

describe("wasHijriDateClamped", () => {
  test("returns true for a clamped Hijri date", () => {
    expect(wasHijriDateClamped({ year: 1501, monthIndex: 0, day: 1 })).toBe(
      true,
    );
  });

  test("returns false for an unchanged Hijri date", () => {
    expect(wasHijriDateClamped({ year: 1446, monthIndex: 8, day: 10 })).toBe(
      false,
    );
  });
});
