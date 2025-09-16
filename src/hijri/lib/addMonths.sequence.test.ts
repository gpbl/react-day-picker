import { toHijriDate } from "../utils/calendar.js";
import { addMonths } from "./addMonths.js";

describe("hijri addMonths sequence", () => {
  test("cycles through all hijri months", () => {
    const start = new Date(2024, 6, 7); // 1 Muharram 1446
    const codes: string[] = [];
    let current = start;
    for (let i = 0; i < 13; i++) {
      const hijri = toHijriDate(current, undefined);
      codes.push(`${hijri.year}-${hijri.monthIndex}`);
      current = addMonths(current, 1);
    }
    expect(codes).toEqual([
      "1446-0",
      "1446-1",
      "1446-2",
      "1446-3",
      "1446-4",
      "1446-5",
      "1446-6",
      "1446-7",
      "1446-8",
      "1446-9",
      "1446-10",
      "1446-11",
      "1447-0",
    ]);
  });
});
