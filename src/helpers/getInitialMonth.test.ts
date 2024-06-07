import { addMonths, isSameMonth } from "date-fns";

import { getInitialMonth } from "./getInitialMonth";

describe("when no toMonth is given", () => {
  describe("when month is in context", () => {
    const month = new Date(2010, 11, 12);
    it("return that month", () => {
      const initialMonth = getInitialMonth({ month });
      expect(isSameMonth(initialMonth, month)).toBe(true);
    });
  });
  describe("when defaultMonth is in context", () => {
    const defaultMonth = new Date(2010, 11, 12);
    it("return that month", () => {
      const initialMonth = getInitialMonth({ defaultMonth });
      expect(isSameMonth(initialMonth, defaultMonth)).toBe(true);
    });
  });
  describe("when no month or defaultMonth are in context", () => {
    const today = new Date(2010, 11, 12);
    it("return the today month", () => {
      const initialMonth = getInitialMonth({ today });
      expect(isSameMonth(initialMonth, today)).toBe(true);
    });
  });
});
describe("when toMonth is given", () => {
  describe("when toMonth is before the default initial date", () => {
    const month = new Date(2010, 11, 12);
    const toMonth = addMonths(month, -2);
    describe("when the number of month is 1", () => {
      const numberOfMonths = 1;
      it("return the toMonth", () => {
        const initialMonth = getInitialMonth({
          month,
          toMonth,
          numberOfMonths
        });
        expect(isSameMonth(initialMonth, toMonth)).toBe(true);
      });
    });
    describe("when the number of month is 3", () => {
      const numberOfMonths = 3;
      it("return the toMonth plus the number of months", () => {
        const initialMonth = getInitialMonth({
          month,
          toMonth,
          numberOfMonths
        });
        const expectedMonth = addMonths(toMonth, -1 * (numberOfMonths - 1));
        expect(isSameMonth(initialMonth, expectedMonth)).toBe(true);
      });
    });
  });
});
