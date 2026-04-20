import { isEthiopicLeapYear } from "./isEthiopicLeapYear";

describe("isEthiopicLeapYear", () => {
  test("should return true for leap years", () => {
    // In Ethiopic calendar, years that give remainder 3 when divided by 4 are leap years
    expect(isEthiopicLeapYear(2003)).toBe(true);
    expect(isEthiopicLeapYear(2007)).toBe(true);
    expect(isEthiopicLeapYear(2011)).toBe(true);
    expect(isEthiopicLeapYear(2015)).toBe(true);
  });

  test("should return false for non-leap years", () => {
    expect(isEthiopicLeapYear(2001)).toBe(false);
    expect(isEthiopicLeapYear(2002)).toBe(false);
    expect(isEthiopicLeapYear(2004)).toBe(false);
    expect(isEthiopicLeapYear(2005)).toBe(false);
  });
});
