import { defaultDateLib } from "../classes/DateLib";
import type { DayOfWeek } from "../types";

import { rangeContainsModifiers } from "./rangeContainsModifiers";

const sunday = new Date(2024, 8, 1); //  day of the week 0
const monday = new Date(2024, 8, 2); //  day of the week 1
const tuesday = new Date(2024, 8, 3); //  day of the week 1
const wednesday = new Date(2024, 8, 4); //  day of the week 1
const thursday = new Date(2024, 8, 5); //  day of the week 1
const friday = new Date(2024, 8, 6); //  day of the week 5
const saturday = new Date(2024, 8, 7); //  day of the week 6
const nextWeekSunday = new Date(2024, 8, 8); //  day of the week 0

const testRange = { from: monday, to: saturday };

describe("when the matcher is a boolean", () => {
  const matcher = true;
  const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
  test("should return the boolean", () => {
    expect(result).toBe(matcher);
  });
});

describe("when matching a single date", () => {
  test("should return true when matching a date in the range", () => {
    const matcher = thursday;
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test('should return true when matching the "from" date', () => {
    const matcher = monday;
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test('should return true when matching the "to" date', () => {
    const matcher = saturday;
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test('should return false on the edge of the "from" date', () => {
    const matcher = sunday;
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
  test('should return false on the edge of the "to" date', () => {
    const matcher = nextWeekSunday;
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
});

describe("when matching an array of dates", () => {
  test("should return true", () => {
    const matcher = [sunday, wednesday, nextWeekSunday];
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test("should return false", () => {
    const matcher = [sunday, nextWeekSunday];
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
});

describe("when matching date range", () => {
  test('should return true when matching the "from" date', () => {
    const matcher = { from: sunday, to: monday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test('should return true when matching the "to" date', () => {
    const matcher = { from: saturday, to: nextWeekSunday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });

  test("should return true when date range contains matcher", () => {
    const matcher = { from: tuesday, to: thursday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test("should return true when matcher contains date range", () => {
    const matcher = { from: sunday, to: nextWeekSunday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });

  test('should return false on the edge of the "from" date', () => {
    const matcher = { from: new Date(2000, 1, 1), to: sunday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
  test('should return false on the edge of the "to" date', () => {
    const matcher = { from: nextWeekSunday, to: new Date(2077, 1, 1) };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
  test("should return false if matcher is an incomplete date range", () => {
    const matcher = { from: monday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
});

describe("when matching the day of week", () => {
  test("should return true", () => {
    const matcher: DayOfWeek = {
      dayOfWeek: [monday.getDay()],
    };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test("should return false", () => {
    const matcher: DayOfWeek = {
      dayOfWeek: [sunday.getDay()],
    };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
});

describe("when matching date interval (closed)", () => {
  test('should return true when matching the "from" date', () => {
    const matcher = { after: sunday, before: tuesday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test('should return true when matching the "to" date', () => {
    const matcher = { after: friday, before: nextWeekSunday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });

  test("should return true when date range contains matcher", () => {
    const matcher = { after: tuesday, before: thursday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test("should return true when matcher contains date range", () => {
    const matcher = { after: sunday, before: nextWeekSunday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });

  test('should return false on the edge of the "from" date', () => {
    const matcher = { after: new Date(2000, 1, 1), before: monday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
  test('should return false on the edge of the "to" date', () => {
    const matcher = { after: saturday, before: new Date(2077, 1, 1) };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
});

describe("when matching date interval (open)", () => {
  test('should return true when matching the "from" date', () => {
    const matcher = { before: tuesday, after: saturday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test('should return true when matching the "to" date', () => {
    const matcher = { before: monday, after: friday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test("should return false when date range is not part of the matcher", () => {
    const matcher = { before: monday, after: saturday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
});

describe("when matching the date after", () => {
  test('should return true when matching the "from" date', () => {
    const matcher = { after: sunday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test('should return true when matching the "to" date', () => {
    const matcher = { after: friday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });

  test("should return false", () => {
    const matcher = { after: saturday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
});

describe("when matching the date before", () => {
  test('should return true when matching the "from" date', () => {
    const matcher = { before: tuesday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test('should return true when matching the "to" date', () => {
    const matcher = { before: nextWeekSunday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });

  test("should return false", () => {
    const matcher = { before: monday };
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
});

describe("when the matcher is a function", () => {
  test('should return true when matching the "from" date', () => {
    const matcher = (date: Date) => date.getTime() === monday.getTime();
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test('should return true when matching the "to" date', () => {
    const matcher = (date: Date) => date.getTime() === saturday.getTime();
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(true);
  });
  test("should return false", () => {
    const matcher = (date: Date) => date.getTime() === nextWeekSunday.getTime();
    const result = rangeContainsModifiers(testRange, [matcher], defaultDateLib);
    expect(result).toBe(false);
  });
});
