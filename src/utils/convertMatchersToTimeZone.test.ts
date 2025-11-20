import { TZDate } from "@date-fns/tz";

import type { DateRange, Matcher } from "../types/index.js";

import { convertMatchersToTimeZone } from "./convertMatchersToTimeZone.js";

const timeZone = "Pacific/Honolulu";

describe("convertMatchersToTimeZone", () => {
  describe("when argument is a date", () => {
    const date = new Date("2024-09-26T00:00:00.000Z");
    let convertedDate: Date;

    beforeEach(() => {
      convertedDate = convertMatchersToTimeZone(date, timeZone) as Date;
    });

    test("returns a TZDate instance", () => {
      expect(convertedDate).toBeInstanceOf(TZDate);
    });

    test("uses the provided time zone offset", () => {
      expect(convertedDate.toISOString()).toEqual(
        new TZDate(date, timeZone).toISOString(),
      );
    });
  });

  describe("when argument is a date range", () => {
    const range: DateRange = {
      from: new Date("2024-09-24T00:00:00.000Z"),
      to: new Date("2024-09-26T00:00:00.000Z"),
    };
    let convertedRange: DateRange;

    beforeEach(() => {
      convertedRange = convertMatchersToTimeZone(range, timeZone) as DateRange;
    });

    test("converts the from date", () => {
      expect(convertedRange.from).toBeInstanceOf(TZDate);
    });

    test("converts the to date", () => {
      expect(convertedRange.to).toBeInstanceOf(TZDate);
    });
  });

  describe("when argument is a date interval", () => {
    const interval = {
      before: new Date("2024-09-20T00:00:00.000Z"),
      after: new Date("2024-09-10T00:00:00.000Z"),
    };
    let convertedInterval: typeof interval;

    beforeEach(() => {
      convertedInterval = convertMatchersToTimeZone(
        interval,
        timeZone,
      ) as typeof interval;
    });

    test("converts the before date", () => {
      expect(convertedInterval.before).toBeInstanceOf(TZDate);
    });

    test("converts the after date", () => {
      expect(convertedInterval.after).toBeInstanceOf(TZDate);
    });
  });

  describe("when argument is a before matcher", () => {
    const before = { before: new Date("2024-08-31T00:00:00.000Z") };
    let convertedBefore: typeof before;

    beforeEach(() => {
      convertedBefore = convertMatchersToTimeZone(
        before,
        timeZone,
      ) as typeof before;
    });

    test("converts the before value", () => {
      expect(convertedBefore.before).toBeInstanceOf(TZDate);
    });
  });

  describe("when argument is an after matcher", () => {
    const after = { after: new Date("2024-10-01T00:00:00.000Z") };
    let convertedAfter: typeof after;

    beforeEach(() => {
      convertedAfter = convertMatchersToTimeZone(
        after,
        timeZone,
      ) as typeof after;
    });

    test("converts the after value", () => {
      expect(convertedAfter.after).toBeInstanceOf(TZDate);
    });
  });

  describe("when argument is an array of matchers", () => {
    const range: DateRange = {
      from: new Date("2024-09-24T00:00:00.000Z"),
      to: new Date("2024-09-26T00:00:00.000Z"),
    };
    const after = { after: new Date("2024-10-01T00:00:00.000Z") };
    let convertedRange: Matcher;
    let convertedAfter: Matcher;

    beforeEach(() => {
      [convertedRange, convertedAfter] = convertMatchersToTimeZone(
        [range, after],
        timeZone,
      ) as Matcher[];
    });

    test("converts each range entry", () => {
      expect((convertedRange as DateRange).from).toBeInstanceOf(TZDate);
    });

    test("converts each after entry", () => {
      expect((convertedAfter as typeof after).after).toBeInstanceOf(TZDate);
    });
  });

  describe("when argument is undefined", () => {
    test("returns undefined", () => {
      expect(convertMatchersToTimeZone(undefined, timeZone)).toBeUndefined();
    });
  });

  describe("when argument is a boolean", () => {
    test("returns the same boolean value", () => {
      expect(convertMatchersToTimeZone(true, timeZone)).toBe(true);
    });
  });

  describe("when argument is a matcher function", () => {
    const matcher = (date: Date) => date.getDay() === 0;

    test("returns the same function reference", () => {
      expect(convertMatchersToTimeZone(matcher, timeZone)).toBe(matcher);
    });
  });
});
