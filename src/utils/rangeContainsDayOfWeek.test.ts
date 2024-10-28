import { defaultDateLib } from "../classes/DateLib";
import { DayOfWeek } from "../types";

import { rangeContainsDayOfWeek } from "./rangeContainsDayOfWeek";

const sunday = new Date(2024, 8, 1); //  day of the week 0
const monday = new Date(2024, 8, 2); //  day of the week 1
const friday = new Date(2024, 8, 6); //  day of the week 5
const saturday = new Date(2024, 8, 7); //  day of the week 6
const nextWeekSunday = new Date(2024, 8, 8); //  day of the week 0

describe("should return false", () => {
  const testCases: Array<[{ from: Date; to: Date }, DayOfWeek]> = [
    [{ from: monday, to: saturday }, { dayOfWeek: 0 }],
    [{ from: monday, to: friday }, { dayOfWeek: [0, 6] }],
    [{ from: sunday, to: friday }, { dayOfWeek: 6 }]
  ];

  for (const [range, dayOfWeek] of testCases) {
    it(`range from ${range.from} to ${range.to} should not contain ${JSON.stringify(dayOfWeek)}`, () => {
      expect(rangeContainsDayOfWeek(range, dayOfWeek, defaultDateLib)).toBe(
        false
      );
    });
  }
});

describe("should return true", () => {
  const testCases: Array<[{ from: Date; to: Date }, DayOfWeek]> = [
    [{ from: sunday, to: saturday }, { dayOfWeek: 0 }],
    [{ from: monday, to: friday }, { dayOfWeek: 1 }],
    [{ from: monday, to: friday }, { dayOfWeek: 2 }],
    [{ from: monday, to: friday }, { dayOfWeek: 3 }],
    [{ from: monday, to: friday }, { dayOfWeek: 4 }],
    [{ from: monday, to: friday }, { dayOfWeek: 5 }],
    [{ from: monday, to: saturday }, { dayOfWeek: 6 }],
    [{ from: monday, to: saturday }, { dayOfWeek: [0, 6] }],
    [{ from: monday, to: nextWeekSunday }, { dayOfWeek: 0 }],
    [{ from: monday, to: nextWeekSunday }, { dayOfWeek: 6 }]
  ];

  for (const [range, dayOfWeek] of testCases) {
    it(`range from ${range.from} to ${range.to} should contain ${JSON.stringify(dayOfWeek)}`, () => {
      expect(rangeContainsDayOfWeek(range, dayOfWeek, defaultDateLib)).toBe(
        true
      );
    });
  }
});
