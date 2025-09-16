import {
  createHijriCalendarDate,
  fromHijriCalendarDate,
  toGregorianDate,
  toHijriCalendarDate,
  toHijriDate,
} from "./calendar.js";

const riaydhDate = new Date(2024, 9, 3);

describe("hijri calendar conversions", () => {
  test("converts gregorian date to hijri and back", () => {
    const hijri = toHijriDate(riaydhDate, "UTC");
    expect(hijri.year).toBe(1446);
    expect(hijri.monthIndex).toBe(2);
    expect(hijri.day).toBe(30);

    const back = toGregorianDate(hijri, "UTC");
    expect(back.getUTCFullYear()).toBe(2024);
    expect(back.getUTCMonth()).toBe(9);
    expect(back.getUTCDate()).toBe(3);
  });

  test("creates calendar date objects", () => {
    const calendarDate = toHijriCalendarDate(riaydhDate, "UTC");
    expect(calendarDate.year).toBe(1446);
    expect(calendarDate.month).toBe(3);
    expect(calendarDate.day).toBe(30);

    const jsDate = fromHijriCalendarDate(calendarDate, "UTC");
    expect(jsDate.getUTCFullYear()).toBe(2024);
    expect(jsDate.getUTCMonth()).toBe(9);
    expect(jsDate.getUTCDate()).toBe(3);
  });

  test("creates gregorian date from hijri fields", () => {
    const calendarDate = createHijriCalendarDate({
      year: 1445,
      monthIndex: 8,
      day: 1,
    });
    const back = fromHijriCalendarDate(calendarDate, "UTC");
    expect(back.getUTCFullYear()).toBe(2024);
    expect(back.getUTCMonth()).toBe(2);
    expect(back.getUTCDate()).toBe(11);
  });
});
