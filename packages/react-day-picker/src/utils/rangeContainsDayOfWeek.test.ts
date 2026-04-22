import { defaultDateLib } from "../classes/DateLib";

import { rangeContainsDayOfWeek } from "./rangeContainsDayOfWeek";

const sunday = new Date(2024, 8, 1); //  day of the week 0
const monday = new Date(2024, 8, 2); //  day of the week 1
const friday = new Date(2024, 8, 6); //  day of the week 5
const saturday = new Date(2024, 8, 7); //  day of the week 6
const nextWeekSunday = new Date(2024, 8, 8); //  day of the week 0

describe("should return false", () => {
  const testCases: Array<[{ from: Date; to: Date }, number | number[]]> = [
    [{ from: monday, to: saturday }, 0],
    [{ from: monday, to: friday }, [0, 6]],
    [{ from: sunday, to: friday }, 6],
  ];

  for (const [range, dayOfWeek] of testCases) {
    it(`range from ${range.from} to ${range.to} should not contain ${JSON.stringify(dayOfWeek)}`, () => {
      expect(rangeContainsDayOfWeek(range, dayOfWeek, defaultDateLib)).toBe(
        false,
      );
    });
  }
});

describe("should return true", () => {
  const testCases: Array<[{ from: Date; to: Date }, number | number[]]> = [
    [{ from: sunday, to: saturday }, 0],
    [{ from: monday, to: friday }, 1],
    [{ from: monday, to: friday }, 2],
    [{ from: monday, to: friday }, 3],
    [{ from: monday, to: friday }, 4],
    [{ from: monday, to: friday }, 5],
    [{ from: monday, to: saturday }, 6],
    [{ from: monday, to: saturday }, [0, 6]],
    [{ from: monday, to: nextWeekSunday }, 0],
    [{ from: monday, to: nextWeekSunday }, 6],
  ];

  for (const [range, dayOfWeek] of testCases) {
    it(`range from ${range.from} to ${range.to} should contain ${JSON.stringify(dayOfWeek)}`, () => {
      expect(rangeContainsDayOfWeek(range, dayOfWeek, defaultDateLib)).toBe(
        true,
      );
    });
  }
});
