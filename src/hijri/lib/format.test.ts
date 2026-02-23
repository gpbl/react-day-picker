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
});
