import { TZDate } from "@date-fns/tz";

import { DateLib } from "../classes/DateLib.js";
import type {
  DateAfter,
  DateBefore,
  DateInterval,
  DateRange,
  DayOfWeek,
  Matcher,
} from "../types/index.js";

import {
  convertMatcherToTimeZone,
  convertMatchersToTimeZone,
} from "./convertMatcherToTimeZone.js";

const testDate = new Date(2023, 5, 15, 12, 0, 0); // June 15, 2023, 12:00
const timeZone = "America/New_York";
const dateLib = new DateLib({ timeZone });

describe("convertMatcherToTimeZone", () => {
  describe("when matcher is a boolean", () => {
    test("should return the boolean unchanged", () => {
      expect(convertMatcherToTimeZone(true, timeZone, dateLib)).toBe(true);
      expect(convertMatcherToTimeZone(false, timeZone, dateLib)).toBe(false);
    });
  });

  describe("when matcher is a function", () => {
    test("should return the function unchanged", () => {
      const matcher = () => true;
      expect(convertMatcherToTimeZone(matcher, timeZone, dateLib)).toBe(
        matcher,
      );
    });
  });

  describe("when matcher is a single Date", () => {
    test("should convert to TZDate with specified timezone", () => {
      const result = convertMatcherToTimeZone(testDate, timeZone, dateLib);
      expect(result).toBeInstanceOf(TZDate);
      expect((result as TZDate).withTimeZone(timeZone).getTime()).toBe(
        testDate.getTime(),
      );
    });
  });

  describe("when matcher is an array of Dates", () => {
    test("should convert all dates to TZDate with specified timezone", () => {
      const dates = [testDate, new Date(2023, 5, 16), new Date(2023, 5, 17)];
      const result = convertMatcherToTimeZone(
        dates,
        timeZone,
        dateLib,
      ) as TZDate[];

      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(3);
      result.forEach((date, index) => {
        expect(date).toBeInstanceOf(TZDate);
        expect(date.withTimeZone(timeZone).getTime()).toBe(
          dates[index].getTime(),
        );
      });
    });
  });

  describe("when matcher is a DateRange", () => {
    test("should convert both from and to dates to TZDate", () => {
      const dateRange: DateRange = {
        from: testDate,
        to: new Date(2023, 5, 20),
      };
      const result = convertMatcherToTimeZone(
        dateRange,
        timeZone,
        dateLib,
      ) as DateRange;

      expect(result.from).toBeInstanceOf(TZDate);
      expect(result.to).toBeInstanceOf(TZDate);
      expect((result.from as TZDate).withTimeZone(timeZone).getTime()).toBe(
        dateRange.from!.getTime(),
      );
      expect((result.to as TZDate).withTimeZone(timeZone).getTime()).toBe(
        dateRange.to!.getTime(),
      );
    });

    test("should handle undefined from and to dates", () => {
      const dateRange: DateRange = {
        from: testDate,
        to: undefined,
      };
      const result = convertMatcherToTimeZone(
        dateRange,
        timeZone,
        dateLib,
      ) as DateRange;

      expect(result.from).toBeInstanceOf(TZDate);
      expect(result.to).toBeUndefined();
    });

    test("should handle completely undefined DateRange", () => {
      const dateRange: DateRange = {
        from: undefined,
        to: undefined,
      };
      const result = convertMatcherToTimeZone(
        dateRange,
        timeZone,
        dateLib,
      ) as DateRange;

      expect(result.from).toBeUndefined();
      expect(result.to).toBeUndefined();
    });
  });

  describe("when matcher is a DateBefore", () => {
    test("should convert before date to TZDate", () => {
      const dateBefore: DateBefore = {
        before: testDate,
      };
      const result = convertMatcherToTimeZone(
        dateBefore,
        timeZone,
        dateLib,
      ) as DateBefore;

      expect(result.before).toBeInstanceOf(TZDate);
      expect((result.before as TZDate).withTimeZone(timeZone).getTime()).toBe(
        dateBefore.before.getTime(),
      );
    });
  });

  describe("when matcher is a DateAfter", () => {
    test("should convert after date to TZDate", () => {
      const dateAfter: DateAfter = {
        after: testDate,
      };
      const result = convertMatcherToTimeZone(
        dateAfter,
        timeZone,
        dateLib,
      ) as DateAfter;

      expect(result.after).toBeInstanceOf(TZDate);
      expect((result.after as TZDate).withTimeZone(timeZone).getTime()).toBe(
        dateAfter.after.getTime(),
      );
    });
  });

  describe("when matcher is a DateInterval", () => {
    test("should convert both before and after dates to TZDate", () => {
      const dateInterval: DateInterval = {
        before: new Date(2023, 5, 20), // June 20, 2023
        after: new Date(2023, 5, 10), // June 10, 2023 (after should be before "before" for open interval)
      };

      const result = convertMatcherToTimeZone(
        dateInterval,
        timeZone,
        dateLib,
      ) as DateInterval;

      expect(result.before).toBeInstanceOf(TZDate);
      expect(result.after).toBeInstanceOf(TZDate);
      expect((result.before as TZDate).withTimeZone(timeZone).getTime()).toBe(
        dateInterval.before.getTime(),
      );
      expect((result.after as TZDate).withTimeZone(timeZone).getTime()).toBe(
        dateInterval.after.getTime(),
      );
    });
  });

  describe("when matcher is a DayOfWeek", () => {
    test("should return DayOfWeek unchanged", () => {
      const dayOfWeek: DayOfWeek = {
        dayOfWeek: [0, 6], // Sunday and Saturday
      };
      const result = convertMatcherToTimeZone(dayOfWeek, timeZone, dateLib);

      expect(result).toBe(dayOfWeek);
    });
  });

  describe("when matcher is an unknown type", () => {
    test("should return the matcher unchanged", () => {
      const unknownMatcher = { unknown: "property" };
      const result = convertMatcherToTimeZone(
        unknownMatcher as any,
        timeZone,
        dateLib,
      );

      expect(result).toBe(unknownMatcher);
    });
  });
});

describe("convertMatchersToTimeZone", () => {
  describe("when matchers is undefined", () => {
    test("should return undefined", () => {
      const result = convertMatchersToTimeZone(undefined, timeZone, dateLib);
      expect(result).toBeUndefined();
    });
  });

  describe("when matchers is a single matcher", () => {
    test("should convert single date matcher", () => {
      const result = convertMatchersToTimeZone(testDate, timeZone, dateLib);
      expect(result).toBeInstanceOf(TZDate);
    });

    test("should convert single DateRange matcher", () => {
      const dateRange: DateRange = {
        from: testDate,
        to: new Date(2023, 5, 20),
      };
      const result = convertMatchersToTimeZone(
        dateRange,
        timeZone,
        dateLib,
      ) as DateRange;

      expect(result.from).toBeInstanceOf(TZDate);
      expect(result.to).toBeInstanceOf(TZDate);
    });
  });

  describe("when matchers is an array", () => {
    test("should convert all matchers in array", () => {
      const matchers: Matcher[] = [
        testDate,
        { before: new Date(2023, 5, 20) },
        { after: new Date(2023, 5, 10) },
        true,
      ];
      const result = convertMatchersToTimeZone(
        matchers,
        timeZone,
        dateLib,
      ) as Matcher[];

      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(4);

      // First matcher (Date) should be converted to TZDate
      expect(result[0]).toBeInstanceOf(TZDate);

      // Second matcher (DateBefore) should have before converted to TZDate
      expect((result[1] as DateBefore).before).toBeInstanceOf(TZDate);

      // Third matcher (DateAfter) should have after converted to TZDate
      expect((result[2] as DateAfter).after).toBeInstanceOf(TZDate);

      // Fourth matcher (boolean) should remain unchanged
      expect(result[3]).toBe(true);
    });

    test("should handle empty array", () => {
      const result = convertMatchersToTimeZone([], timeZone, dateLib);
      expect(result).toEqual([]);
    });
  });

  describe("timezone handling", () => {
    test("should work with different timezones", () => {
      const pacificTimeZone = "America/Los_Angeles";
      const result = convertMatchersToTimeZone(
        testDate,
        pacificTimeZone,
        new DateLib({ timeZone: pacificTimeZone }),
      );

      expect(result).toBeInstanceOf(TZDate);
      expect((result as TZDate).withTimeZone(pacificTimeZone).getTime()).toBe(
        testDate.getTime(),
      );
    });

    test("should work with UTC timezone", () => {
      const utcTimeZone = "UTC";
      const result = convertMatchersToTimeZone(
        testDate,
        utcTimeZone,
        new DateLib({ timeZone: utcTimeZone }),
      );

      expect(result).toBeInstanceOf(TZDate);
      expect((result as TZDate).withTimeZone(utcTimeZone).getTime()).toBe(
        testDate.getTime(),
      );
    });
  });
});
