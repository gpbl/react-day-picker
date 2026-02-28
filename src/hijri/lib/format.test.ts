import { DateLib } from "../../classes/DateLib.js";
import { enUS } from "../../locale/en-US.js";
import { format } from "./format.js";
import * as hijriDateLib from "./index.js";

describe("hijri format", () => {
  const ramadanDate = new Date(2025, 2, 8); // 8 Ramadan 1446

  test("formats caption with Hijri month and year", () => {
    expect(format(ramadanDate, "LLLL y", { locale: enUS })).toBe(
      "Ramadan 1446",
    );
  });

  test("formats day token in range", () => {
    expect(format(ramadanDate, "d", { locale: enUS })).toBe("8");
  });

  test("formats narrow weekday token used for weekday headers", () => {
    expect(format(ramadanDate, "cccccc", { locale: enUS })).toBe("S");
  });

  describe("when date is outside converter range", () => {
    test("falls back to Gregorian numeric tokens", () => {
      expect(format(new Date(2100, 0, 1), "yyyy-MM-dd", { locale: enUS })).toBe(
        "2100-01-01",
      );
    });
  });

  describe("when DateLib numerals option is set", () => {
    test("replaces digits using configured numeral system", () => {
      const dateLib = new DateLib(
        { locale: enUS, numerals: "arab" },
        hijriDateLib,
      );

      expect(dateLib.format(ramadanDate, "d")).toBe("٨");
    });
  });

  describe('when Intl.DateTimeFormat does not support "islamic-umalqura"', () => {
    const originalDateTimeFormat = Intl.DateTimeFormat;

    beforeEach(() => {
      jest.spyOn(Intl, "DateTimeFormat").mockImplementation(((
        locales,
        options,
      ) => {
        if (options?.calendar === "islamic-umalqura") {
          throw new RangeError("Unsupported calendar");
        }
        return new originalDateTimeFormat(locales, options);
      }) as typeof Intl.DateTimeFormat);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test("formats month and year using fallback names", () => {
      expect(format(ramadanDate, "LLLL y", { locale: enUS })).toBe(
        "Ramadan 1446",
      );
    });

    test("formats weekday tokens using fallback weekday names", () => {
      expect(format(ramadanDate, "cccccc", { locale: enUS })).toBe("S");
    });

    test("formats full date style using fallback formatting", () => {
      expect(format(ramadanDate, "PPPP", { locale: enUS })).toBe(
        "Saturday, Ramadan 8, 1446",
      );
    });

    test("formats time tokens without throwing", () => {
      expect(format(ramadanDate, "hh:mm a", { locale: enUS })).toMatch(/\d/);
    });
  });
});
