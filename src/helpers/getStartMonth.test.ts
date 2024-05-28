import { addMonths, isSameMonth } from "date-fns";

import { getStartMonth } from "./getStartMonth";

describe("when no toDate is given", () => {
  describe("when month is in context", () => {
    const month = new Date(2010, 11, 12);
    it("return that month", () => {
      const startMonth = getStartMonth({ month });
      expect(isSameMonth(startMonth, month)).toBe(true);
    });
  });
  describe("when defaultMonth is in context", () => {
    const defaultMonth = new Date(2010, 11, 12);
    it("return that month", () => {
      const startMonth = getStartMonth({ defaultMonth });
      expect(isSameMonth(startMonth, defaultMonth)).toBe(true);
    });
  });
  describe("when no month or defaultMonth are in context", () => {
    const today = new Date(2010, 11, 12);
    it("return the today month", () => {
      const startMonth = getStartMonth({ today });
      expect(isSameMonth(startMonth, today)).toBe(true);
    });
  });
});
describe("when toDate is given", () => {
  describe("when toDate is before the default initial date", () => {
    const month = new Date(2010, 11, 12);
    const toDate = addMonths(month, -2);
    describe("when the number of month is 1", () => {
      const numberOfMonths = 1;
      it("return the toDate", () => {
        const startMonth = getStartMonth({
          month,
          toDate,
          numberOfMonths
        });
        expect(isSameMonth(startMonth, toDate)).toBe(true);
      });
    });
    describe("when the number of month is 3", () => {
      const numberOfMonths = 3;
      it("return the toDate plus the number of months", () => {
        const startMonth = getStartMonth({
          month,
          toDate,
          numberOfMonths
        });
        const expectedMonth = addMonths(toDate, -1 * (numberOfMonths - 1));
        expect(isSameMonth(startMonth, expectedMonth)).toBe(true);
      });
    });
  });
});
