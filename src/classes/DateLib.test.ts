import { TZDate } from "@date-fns/tz";
import type { Numerals } from "../types/shared.js";
import { DateLib } from "./DateLib.js";

const numeralCases: Array<[Numerals, string]> = [
  ["latn", "123"],
  ["arab", "١٢٣"],
  ["arabext", "۱۲۳"],
  ["deva", "१२३"],
  // Geez numerals are not supported by Intl.NumberFormat; DateLib falls back
  // to Latin digits for now when the locale does not provide them.
  ["geez", "123"],
  ["beng", "১২৩"],
  ["guru", "੧੨੩"],
  ["gujr", "૧૨૩"],
  ["orya", "୧୨୩"],
  ["tamldec", "௧௨௩"],
  ["telu", "౧౨౩"],
  ["knda", "೧೨೩"],
  ["mlym", "൧൨൩"],
  ["thai", "๑๒๓"],
  ["mymr", "၁၂၃"],
  ["khmr", "១២៣"],
  ["laoo", "໑໒໓"],
  ["tibt", "༡༢༣"],
];

describe("DateLib numerals", () => {
  test.each(numeralCases)(
    "formats numbers using %s digits",
    (numerals, expected) => {
      const dateLib = new DateLib({ numerals });
      expect(dateLib.formatNumber(123)).toBe(expected);
    },
  );
});

describe("DateLib with time zones", () => {
  const timeZone = "Asia/Tehran";
  const dateLib = new DateLib({ timeZone, weekStartsOn: 1 });

  test("startOfDay returns midnight in the configured time zone", () => {
    const result = dateLib.startOfDay(new Date(2023, 0, 15, 12));
    expect(result.getTime()).toBe(new TZDate(2023, 0, 15, timeZone).getTime());
  });

  test("startOfYear returns Jan 1st in the configured time zone", () => {
    const result = dateLib.startOfYear(new Date(2023, 6, 10));
    expect(result.getTime()).toBe(new TZDate(2023, 0, 1, timeZone).getTime());
  });

  test("endOfYear returns Dec 31st end-of-day in the configured time zone", () => {
    const expected = new TZDate(2023, 11, 31, timeZone);
    expected.setHours(23, 59, 59, 999);
    const result = dateLib.endOfYear(new Date(2023, 6, 10));
    expect(result.getTime()).toBe(expected.getTime());
  });

  test("startOfWeek respects weekStartsOn in the configured time zone", () => {
    const result = dateLib.startOfWeek(new Date(2023, 0, 1));
    const expected = new TZDate(2022, 11, 26, timeZone);
    expect(result.getTime()).toBe(expected.getTime());
  });

  test("endOfWeek returns the last day of that week in the configured time zone", () => {
    const result = dateLib.endOfWeek(new Date(2023, 0, 1));
    const expected = new TZDate(2023, 0, 1, timeZone);
    expected.setHours(23, 59, 59, 999);
    expect(result.getTime()).toBe(expected.getTime());
  });

  test("startOfMonth uses the configured time zone", () => {
    const result = dateLib.startOfMonth(new Date(2023, 6, 10));
    expect(result.getTime()).toBe(new TZDate(2023, 6, 1, timeZone).getTime());
  });

  test("endOfMonth returns the last day in the configured time zone", () => {
    const result = dateLib.endOfMonth(new Date(2023, 0, 10));
    const expected = new TZDate(2023, 0, 31, timeZone);
    expected.setHours(23, 59, 59, 999);
    expect(result.getTime()).toBe(expected.getTime());
  });

  test("ISO week helpers respect the configured time zone", () => {
    const start = dateLib.startOfISOWeek(new Date(2023, 0, 1));
    const end = dateLib.endOfISOWeek(new Date(2023, 0, 1));
    const expectedStart = new TZDate(2022, 11, 26, timeZone);
    const expectedEnd = new TZDate(2023, 0, 1, timeZone);
    expectedEnd.setHours(23, 59, 59, 999);
    expect(start.getTime()).toBe(expectedStart.getTime());
    expect(end.getTime()).toBe(expectedEnd.getTime());
  });
});
