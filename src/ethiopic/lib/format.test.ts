import { enUS } from "date-fns/locale/en-US";
import { toGregorianDate } from "../utils";
import { format } from "./format";

describe("format", () => {
  test("should format date", () => {
    // Ethiopian date: 06/07/2016 (dd/mm/yyyy)
    const date = toGregorianDate({ year: 2016, month: 7, day: 6 });
    expect(format(date, "yyyy-MM-dd")).toBe("2016-07-06");
    expect(format(date, "d")).toBe("6");
    expect(format(date, "yyyy-MM")).toBe("2016-07");
  });

  test("should format Ethiopian month names correctly", () => {
    // Ethiopian date: 06 መጋቢት 2016
    const date = toGregorianDate({ year: 2016, month: 7, day: 6 });
    expect(format(date, "LLLL yyyy")).toBe("መጋቢት 2016");
    expect(format(date, "LLLL")).toBe("መጋቢት");
    expect(format(date, "PPP")).toBe(" መጋቢት 6, 2016");
  });

  test("should format time components correctly", () => {
    // Ethiopian date: 06 መጋቢት 2016, 14:30
    const date = toGregorianDate({ year: 2016, month: 7, day: 6 });
    date.setHours(14, 30);
    expect(format(date, "hh:mm a")).toBe("2:30 PM");
  });

  test("should format full date with Ethiopian day names", () => {
    // Ethiopian date: ዓርብ, 06 መጋቢት 2016
    const date = toGregorianDate({ year: 2016, month: 7, day: 6 });
    expect(format(date, "PPPP")).toBe("ዓርብ, መጋቢት 6, 2016");
    expect(format(date, "cccc")).toBe("ዓርብ");
    expect(format(date, "cccccc")).toBe("ዓ");
  });

  test("should format year tokens without month/day", () => {
    const date = toGregorianDate({ year: 2016, month: 7, day: 6 });
    expect(format(date, "y")).toBe("2016");
    expect(format(date, "yy")).toBe("16");
    expect(format(date, "yyyy")).toBe("2016");
    expect(format(date, "yyyy", { numerals: "geez" } as any)).toBe(
      "፳፻፲፮",
    );
  });

  test("should format in English when enUS locale is passed", () => {
    // Ethiopian date: 06 መጋቢት 2016 (Friday)
    const date = toGregorianDate({ year: 2016, month: 7, day: 6 });
    expect(format(date, "LLLL yyyy", { locale: enUS })).toBe("Megabit 2016");
    expect(format(date, "PPPP", { locale: enUS })).toBe(
      "Friday, Megabit 6, 2016",
    );
    expect(format(date, "cccccc", { locale: enUS })).toBe("F");
  });

  test("should Latinize month with numerals=latn even with amET locale", () => {
    const date = toGregorianDate({ year: 2016, month: 7, day: 6 });
    expect(format(date, "LLLL yyyy", { numerals: "latn" } as any)).toBe(
      "Megabit 2016",
    );
  });

  test("should format with Geez digits when numerals=geez and enUS locale", () => {
    const date = toGregorianDate({ year: 2016, month: 7, day: 6 });
    expect(
      format(date, "LLLL yyyy", { locale: enUS, numerals: "geez" } as any),
    ).toBe("Megabit ፳፻፲፮");
  });
});
