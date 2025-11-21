import { TZDate } from "@date-fns/tz";

import { toTimeZone } from "./toTimeZone.js";

const timeZone = "Pacific/Honolulu";

describe("toTimeZone", () => {
  describe("when argument is a TZDate already in the target zone", () => {
    const tzDate = new TZDate("2024-09-26T00:00:00.000Z", timeZone);
    let result: TZDate;

    beforeEach(() => {
      result = toTimeZone(tzDate, timeZone);
    });

    test("returns the original instance", () => {
      expect(result).toBe(tzDate);
    });
  });

  describe("when argument is a TZDate in a different zone", () => {
    const tzDate = new TZDate("2024-09-26T00:00:00.000Z", "UTC");
    let result: TZDate;

    beforeEach(() => {
      result = toTimeZone(tzDate, timeZone);
    });

    test("returns a new instance", () => {
      expect(result).not.toBe(tzDate);
    });

    test("adopts the requested time zone", () => {
      expect(result.timeZone).toBe(timeZone);
    });
  });

  describe("when argument is a native Date", () => {
    const date = new Date("2024-09-26T00:00:00.000Z");
    let result: TZDate;

    beforeEach(() => {
      result = toTimeZone(date, timeZone);
    });

    test("wraps the value as TZDate", () => {
      expect(result).toBeInstanceOf(TZDate);
    });

    test("matches the TZDate ISO output", () => {
      expect(result.toISOString()).toEqual(
        new TZDate(date, timeZone).toISOString(),
      );
    });
  });
});
