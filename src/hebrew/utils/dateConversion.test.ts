import { getMonthCode } from "./calendarMath.js";
import { toGregorianDate, toHebrewDate } from "./dateConversion.js";

describe("hebrew absolute conversions", () => {
  test("converts gregorian dates to hebrew and back", () => {
    const roshHashanah5785 = new Date(2024, 9, 3);
    const hebrew = toHebrewDate(roshHashanah5785);
    expect(hebrew.year).toBe(5785);
    expect(hebrew.monthIndex).toBe(0);
    expect(hebrew.day).toBe(1);

    const back = toGregorianDate(hebrew);
    expect(back.getFullYear()).toBe(2024);
    expect(back.getMonth()).toBe(9);
    expect(back.getDate()).toBe(3);
  });

  test("round-trips a leap month date", () => {
    const passover5784 = new Date(2024, 3, 23);
    const hebrew = toHebrewDate(passover5784);
    expect(hebrew.year).toBe(5784);
    expect(getMonthCode(hebrew.year, hebrew.monthIndex)).toBe("nisan");
    expect(hebrew.day).toBe(15);

    const back = toGregorianDate(hebrew);
    expect(back.getFullYear()).toBe(2024);
    expect(back.getMonth()).toBe(3);
    expect(back.getDate()).toBe(23);
  });

  test("rollover around rosh hashanah", () => {
    const roshHashanah5785 = new Date(2024, 9, 3);
    const previousDay = new Date(2024, 9, 2);
    const prevHebrew = toHebrewDate(previousDay);
    expect(getMonthCode(prevHebrew.year, prevHebrew.monthIndex)).toBe("elul");
    expect(prevHebrew.day).toBeGreaterThan(0);

    const nextHebrew = toHebrewDate(roshHashanah5785);
    expect(nextHebrew.year).toBe(prevHebrew.year + 1);
    expect(getMonthCode(nextHebrew.year, nextHebrew.monthIndex)).toBe(
      "tishrei",
    );
    expect(nextHebrew.day).toBe(1);
  });

  test("leap year transitions across adar months", () => {
    const adarI = new Date(2024, 1, 12);
    const hebrewAdarI = toHebrewDate(adarI);
    expect(getMonthCode(hebrewAdarI.year, hebrewAdarI.monthIndex)).toBe(
      "adarI",
    );

    const adarIi = new Date(2024, 2, 12);
    const hebrewAdarIi = toHebrewDate(adarIi);
    expect(getMonthCode(hebrewAdarIi.year, hebrewAdarIi.monthIndex)).toBe(
      "adar",
    );

    const nisan = new Date(2024, 3, 12);
    const hebrewNisan = toHebrewDate(nisan);
    expect(getMonthCode(hebrewNisan.year, hebrewNisan.monthIndex)).toBe(
      "nisan",
    );
  });

  test("conversion boundaries for past and future", () => {
    const farPast = new Date(1900, 0, 1);
    const pastHebrew = toHebrewDate(farPast);
    const pastBack = toGregorianDate(pastHebrew);
    expect(pastBack.getFullYear()).toBe(farPast.getFullYear());
    expect(pastBack.getMonth()).toBe(farPast.getMonth());
    expect(pastBack.getDate()).toBe(farPast.getDate());

    const farFuture = new Date(2300, 0, 1);
    const futureHebrew = toHebrewDate(farFuture);
    const futureBack = toGregorianDate(futureHebrew);
    expect(futureBack.getFullYear()).toBe(farFuture.getFullYear());
    expect(futureBack.getMonth()).toBe(farFuture.getMonth());
    expect(futureBack.getDate()).toBe(farFuture.getDate());
  });

  test("ignores time component when converting", () => {
    const withTime = new Date(2024, 3, 23, 15, 30, 45);
    const hebrew = toHebrewDate(withTime);
    const back = toGregorianDate(hebrew);
    expect(back.getFullYear()).toBe(2024);
    expect(back.getMonth()).toBe(3);
    expect(back.getDate()).toBe(23);
    expect(back.getHours()).toBe(0);
    expect(back.getMinutes()).toBe(0);
  });

  test("handles very early gregorian dates", () => {
    const early = new Date(0);
    early.setUTCFullYear(10, 0, 15);
    const hebrew = toHebrewDate(early);
    const back = toGregorianDate(hebrew);
    expect(back.getFullYear()).toBe(10);
    expect(back.getMonth()).toBe(0);
    expect(back.getDate()).toBe(15);
  });
});
