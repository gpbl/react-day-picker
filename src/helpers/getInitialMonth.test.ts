import { addMonths, isSameMonth } from "date-fns";
import { dateLib } from "react-day-picker";

import { getInitialMonth } from "./getInitialMonth";

describe("when no endMonth is given", () => {
  describe("when month is in context", () => {
    const month = new Date(2010, 11, 12);
    it("return that month", () => {
      const startMonth = getInitialMonth({
        month,
        dateLib,
        startMonth: undefined,
        endMonth: undefined,
        today: new Date(),
        numberOfMonths: 0
      });
      expect(isSameMonth(startMonth, month)).toBe(true);
    });
  });
  describe("when defaultMonth is in context", () => {
    const defaultMonth = new Date(2010, 11, 12);
    it("return that month", () => {
      const startMonth = getInitialMonth({
        defaultMonth,
        startMonth: undefined,
        endMonth: undefined,
        today: new Date(),
        numberOfMonths: 0,
        dateLib
      });
      expect(isSameMonth(startMonth, defaultMonth)).toBe(true);
    });
  });
  describe("when no month or defaultMonth are in context", () => {
    const today = new Date(2010, 11, 12);
    it("return the today month", () => {
      const startMonth = getInitialMonth({
        today,
        startMonth: undefined,
        endMonth: undefined,
        numberOfMonths: 0,
        dateLib
      });
      expect(isSameMonth(startMonth, today)).toBe(true);
    });
  });
});
describe("when endMonth is given", () => {
  describe("when endMonth is before the default initial date", () => {
    const month = new Date(2010, 11, 12);
    const endMonth = addMonths(month, -2);
    describe("when the number of month is 1", () => {
      const numberOfMonths = 1;
      it("return the endMonth", () => {
        const startMonth = getInitialMonth({
          month,
          endMonth,
          numberOfMonths,
          startMonth: undefined,
          today: new Date(),
          dateLib
        });
        expect(isSameMonth(startMonth, endMonth)).toBe(true);
      });
    });
    describe("when the number of month is 3", () => {
      const numberOfMonths = 3;
      it("return the endMonth plus the number of months", () => {
        const startMonth = getInitialMonth({
          month,
          endMonth,
          numberOfMonths,
          startMonth: undefined,
          today: new Date(),
          dateLib
        });
        const expectedMonth = addMonths(endMonth, -1 * (numberOfMonths - 1));
        expect(isSameMonth(startMonth, expectedMonth)).toBe(true);
      });
    });
  });
});
