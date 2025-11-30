import { enUS } from "date-fns/locale/en-US";

import { format as ethFormat } from "../ethiopic/lib/format.js";
import { amET } from "./am-ET.js";

describe("am-ET locale", () => {
  test("has correct code", () => {
    expect(amET.code).toBe("am-ET");
  });

  test("localizes month names via Intl", () => {
    expect(amET.localize.month(0, { width: "wide" })).toBe("ጃንዋሪ");
  });

  test("localizes weekday names via Intl", () => {
    expect(amET.localize.day(0, { width: "short" })).toBe("እሑድ");
  });

  test("ordinalNumber falls back to numeric string", () => {
    expect(amET.localize.ordinalNumber(12)).toBe("12");
  });

  test("options are set (weekStartsOn, firstWeekContainsDate)", () => {
    expect(amET.options?.weekStartsOn).toBe(1);
    expect(amET.options?.firstWeekContainsDate).toBe(1);
  });

  test("Ethiopic time formatting uses locale code", () => {
    const date = new Date(2017, 0, 1, 14, 30);
    const expected = new Intl.DateTimeFormat("am-ET", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
    const formatted = ethFormat(date, "hh:mm a", { locale: amET });
    expect(formatted).toBe(expected);
  });

  test("falls back to en-US structures for distance/relative/match", () => {
    // Spot check: formatLong references enUS formatted tokens
    expect(amET.formatLong.date({ width: "full" })).toBe(
      enUS.formatLong.date({ width: "full" }),
    );
  });
});

