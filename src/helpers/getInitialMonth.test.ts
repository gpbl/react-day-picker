import { addMonths, isSameMonth } from "date-fns";

import { defaultDateLib } from "../classes/DateLib";

import { getInitialMonth } from "./getInitialMonth";

describe("when no endMonth is given", () => {
  describe("when month is in context", () => {
    const month = new Date(2010, 11, 12);
    it("return that month", () => {
      const startMonth = getInitialMonth({ month }, defaultDateLib);
      expect(isSameMonth(startMonth, month)).toBe(true);
    });
  });
  describe("when defaultMonth is in context", () => {
    const defaultMonth = new Date(2010, 11, 12);
    it("return that month", () => {
      const startMonth = getInitialMonth({ defaultMonth }, defaultDateLib);
      expect(isSameMonth(startMonth, defaultMonth)).toBe(true);
    });
  });
  describe("when no month or defaultMonth", () => {
    const today = new Date(2010, 11, 12);
    it("return the today month", () => {
      const startMonth = getInitialMonth({ today }, defaultDateLib);
      expect(isSameMonth(startMonth, today)).toBe(true);
    });
  });
});
describe("when endMonth is given", () => {
  describe("when endMonth is before the default initial date", () => {
    const month = new Date(2010, 11, 12);
    const endMonth = addMonths(month, -2);
    describe("when the number of month is 1", () => {
      it("return the endMonth", () => {
        const startMonth = getInitialMonth({ month, endMonth }, defaultDateLib);
        expect(isSameMonth(startMonth, endMonth)).toBe(true);
      });
    });
    describe("when the number of month is 3", () => {
      it("return the endMonth plus the number of months", () => {
        const startMonth = getInitialMonth(
          { month, numberOfMonths: 3, endMonth },
          defaultDateLib
        );
        const expectedMonth = addMonths(endMonth, -1 * (3 - 1));
        expect(isSameMonth(startMonth, expectedMonth)).toBe(true);
      });
    });
  });
});
