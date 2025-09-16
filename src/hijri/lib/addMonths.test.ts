import { toHijriDate } from "../utils/calendar.js";
import { addMonths } from "./addMonths.js";

describe("hijri addMonths", () => {
  test("advances month within same year", () => {
    const muharram = new Date(2024, 6, 7); // 1 Muharram 1446 AH
    const next = addMonths(muharram, 1);
    const hijri = toHijriDate(next, undefined);
    expect(hijri.year).toBe(1446);
    expect(hijri.monthIndex).toBe(1);
    expect(hijri.day).toBe(1);
  });

  test("handles year rollover", () => {
    const dhuAlHijjah = new Date(2025, 4, 28); // 1 Dhu al-Hijjah 1446 AH
    const next = addMonths(dhuAlHijjah, 1);
    const hijri = toHijriDate(next, undefined);
    expect(hijri.year).toBe(1447);
    expect(hijri.monthIndex).toBe(0);
    expect(hijri.day).toBe(1);
  });
});
