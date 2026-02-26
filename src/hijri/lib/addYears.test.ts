import { toGregorianDate, toHijriDate } from "../utils/conversion.js";
import { getDaysInMonth } from "../utils/daysInMonth.js";
import { GREGORIAN_MAX_DATE, GREGORIAN_MIN_DATE } from "../utils/range.js";
import { addYears } from "./addYears.js";

function findYearDayClampMonth() {
  for (let year = 1343; year <= 1499; year += 1) {
    for (let monthIndex = 0; monthIndex < 12; monthIndex += 1) {
      if (
        getDaysInMonth(year, monthIndex) === 30 &&
        getDaysInMonth(year + 1, monthIndex) === 29
      ) {
        return { year, monthIndex };
      }
    }
  }
  throw new Error("Could not find a Hijri year transition with 30->29 days");
}

describe("addYears", () => {
  describe("when the source day does not exist in the target Hijri year", () => {
    test("clamps day to the last day of the target month", () => {
      const found = findYearDayClampMonth();

      const start = toGregorianDate({
        year: found.year,
        monthIndex: found.monthIndex,
        day: 30,
      });

      const result = addYears(start, 1);
      const hijri = toHijriDate(result);

      expect(hijri.day).toBe(29);
    });
  });

  describe("when adding years past the maximum supported range", () => {
    test("returns the maximum supported date", () => {
      const result = addYears(new Date(GREGORIAN_MAX_DATE), 1);

      expect(result).toEqual(new Date(GREGORIAN_MAX_DATE));
    });
  });

  describe("when subtracting years past the minimum supported range", () => {
    test("returns the minimum supported date", () => {
      const result = addYears(new Date(GREGORIAN_MIN_DATE), -1);

      expect(result).toEqual(new Date(GREGORIAN_MIN_DATE));
    });
  });
});
