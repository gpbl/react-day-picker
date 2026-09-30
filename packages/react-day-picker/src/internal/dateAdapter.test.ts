import { TZDate } from "@date-fns/tz";

import { CalendarDay } from "../classes/CalendarDay.js";
import { DateLib } from "../classes/DateLib.js";

import { createDateAdapter } from "./dateAdapter.js";

describe("createDateAdapter", () => {
  describe("when creating a time key for a native Date", () => {
    const date = new Date(2024, 0, 15);
    let result: number;

    beforeEach(() => {
      const adapter = createDateAdapter(new DateLib());
      result = adapter.timeKey(date);
    });

    test("uses getTime-compatible values", () => {
      expect(result).toBe(date.getTime());
    });
  });

  describe("when creating a time key for a TZDate", () => {
    const date = new TZDate(2024, 0, 15, "Pacific/Honolulu");
    let result: number;

    beforeEach(() => {
      const adapter = createDateAdapter(new DateLib());
      result = adapter.timeKey(date);
    });

    test("uses getTime-compatible values", () => {
      expect(result).toBe(date.getTime());
    });
  });

  describe("when comparing dates", () => {
    const earlier = new Date(2024, 0, 1);
    const later = new Date(2024, 0, 2);
    let earlierResult: number;
    let laterResult: number;
    let matchingResult: number;

    beforeEach(() => {
      const adapter = createDateAdapter(new DateLib());
      earlierResult = adapter.compare(earlier, later);
      laterResult = adapter.compare(later, earlier);
      matchingResult = adapter.compare(earlier, new Date(earlier));
    });

    test("returns a negative value for earlier dates", () => {
      expect(earlierResult).toBeLessThan(0);
    });

    test("returns a positive value for later dates", () => {
      expect(laterResult).toBeGreaterThan(0);
    });

    test("returns zero for matching timestamps", () => {
      expect(matchingResult).toBe(0);
    });
  });

  describe("when creating stable keys", () => {
    const date = new Date(2024, 0, 15);
    const displayMonth = new Date(2024, 0, 1);
    let calendarDay: CalendarDay;
    let dayKey: string;
    let displayMonthKey: string;
    let dateMonthKey: string;

    beforeEach(() => {
      const dateLib = new DateLib();
      const adapter = createDateAdapter(dateLib);
      calendarDay = new CalendarDay(date, displayMonth, dateLib);
      dayKey = adapter.dayKey(date);
      displayMonthKey = adapter.monthKey(displayMonth);
      dateMonthKey = adapter.monthKey(date);
    });

    test("matches the CalendarDay day key", () => {
      expect(dayKey).toBe(calendarDay.isoDate);
    });

    test("matches the CalendarDay display month key", () => {
      expect(displayMonthKey).toBe(calendarDay.displayMonthId);
    });

    test("matches the CalendarDay date month key", () => {
      expect(dateMonthKey).toBe(calendarDay.dateMonthId);
    });
  });

  describe("when DateLib overrides are provided", () => {
    const nextDate = new Date(2024, 0, 20);
    let addDaysResult: Date;
    let isSameDayResult: boolean;
    let dayKeyResult: string;

    beforeEach(() => {
      const dateLib = new DateLib(undefined, {
        addDays: () => nextDate,
        format: (_date, formatStr) => `formatted:${formatStr}`,
        isSameDay: () => true,
      });
      const adapter = createDateAdapter(dateLib);
      addDaysResult = adapter.addDays(new Date(2024, 0, 15), 5);
      isSameDayResult = adapter.isSameDay(
        new Date(2024, 0, 15),
        new Date(2024, 0, 16),
      );
      dayKeyResult = adapter.dayKey(new Date(2024, 0, 15));
    });

    test("delegates date math", () => {
      expect(addDaysResult).toBe(nextDate);
    });

    test("delegates date equality", () => {
      expect(isSameDayResult).toBe(true);
    });

    test("delegates stable key formatting", () => {
      expect(dayKeyResult).toBe("formatted:yyyy-MM-dd");
    });
  });
});
