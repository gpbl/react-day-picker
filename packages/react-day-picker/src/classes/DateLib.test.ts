import { bg } from "../locale/bg.js";
import { de } from "../locale/de.js";
import { hi } from "../locale/hi.js";
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
  test.each(
    numeralCases,
  )("formats numbers using %s digits", (numerals, expected) => {
    const dateLib = new DateLib({ numerals });
    expect(dateLib.formatNumber(123)).toBe(expected);
  });
});

describe("DateLib overrides", () => {
  test("returns Date instances supplied by date-producing overrides", () => {
    const today = new Date(2024, 0, 15);
    const newDate = new Date(2024, 1, 1);
    const startOfMonth = new Date(2024, 0, 1);
    const dateLib = new DateLib(undefined, {
      today: () => today,
      newDate: () => newDate,
      startOfMonth: () => startOfMonth,
    });

    expect(dateLib.today()).toBe(today);
    expect(dateLib.today()).toBeInstanceOf(Date);
    expect(dateLib.newDate(2024, 1, 1)).toBe(newDate);
    expect(dateLib.newDate(2024, 1, 1)).toBeInstanceOf(Date);
    expect(dateLib.startOfMonth(today)).toBe(startOfMonth);
    expect(dateLib.startOfMonth(today)).toBeInstanceOf(Date);
  });
});

describe("DateLib formatFullDate", () => {
  const date = new Date(2026, 0, 22);

  test("writes the day as a number instead of an ordinal", () => {
    expect(new DateLib().formatFullDate(date)).toBe(
      "Thursday, January 22, 2026",
    );
  });

  test("keeps the locale's full date when the day is already a word", () => {
    expect(new DateLib({ locale: de }).formatFullDate(date)).toBe(
      "Donnerstag, 22. Januar 2026",
    );
  });

  test("does not zero-pad the day", () => {
    expect(
      new DateLib({ locale: bg }).formatFullDate(new Date(2026, 0, 1)),
    ).toBe("четвъртък, 1 януари 2026");
  });

  test("applies the configured numerals", () => {
    expect(
      new DateLib({ locale: hi, numerals: "deva" }).formatFullDate(date),
    ).toBe("गुरुवार, २२ जनवरी, २०२६");
  });

  test("formats with PPPP when format is overridden", () => {
    const format = jest.fn(() => "formatted");
    const dateLib = new DateLib({}, { format });
    expect(dateLib.formatFullDate(date)).toBe("formatted");
    expect(format).toHaveBeenCalledTimes(1);
    expect(format).toHaveBeenCalledWith(date, "PPPP", dateLib.options);
  });
});
