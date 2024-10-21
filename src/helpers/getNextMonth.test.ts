import { addMonths, isSameMonth } from "date-fns";

import { dateLib } from "../lib/dateLib";

import { getNextMonth } from "./getNextMonth";

const startingMonth = new Date(2020, 4, 31);

describe("when number of months is 1", () => {
  describe("when the navigation is disabled", () => {
    it("the next month is undefined", () => {
      const result = getNextMonth(
        startingMonth,
        undefined,
        {
          disableNavigation: true
        },
        dateLib
      );
      expect(result).toBe(undefined);
    });
  });
  describe("when in the navigable range", () => {
    const endMonth = addMonths(startingMonth, 3);
    it("the next month is not undefined", () => {
      const result = getNextMonth(startingMonth, endMonth, {}, dateLib);
      const expectedNextMonth = addMonths(startingMonth, 1);
      expect(result && isSameMonth(result, expectedNextMonth)).toBeTruthy();
    });
  });
  describe("when not in the navigable range", () => {
    const endMonth = startingMonth;
    it("the next month is undefined", () => {
      const result = getNextMonth(startingMonth, endMonth, {}, dateLib);
      expect(result).toBe(undefined);
    });
  });
});
describe("when displaying 3 months", () => {
  const numberOfMonths = 3;
  describe("when the navigation is paged", () => {
    const pagedNavigation = true;
    it("the next month is 3 months ahead", () => {
      const result = getNextMonth(
        startingMonth,
        undefined,
        {
          numberOfMonths,
          pagedNavigation
        },
        dateLib
      );
      const expectedNextMonth = addMonths(startingMonth, 3);
      expect(result && isSameMonth(result, expectedNextMonth)).toBeTruthy();
    });
    describe("when the to-date is ahead less than 3 months", () => {
      it("the next month is undefined", () => {
        const result = getNextMonth(
          startingMonth,
          addMonths(startingMonth, 1),
          {
            numberOfMonths,
            pagedNavigation
          },
          dateLib
        );
        expect(result).toBe(undefined);
      });
    });
  });
  describe("when the navigation is not paged", () => {
    const pagedNavigation = false;
    it("the next month is 1 months ahead", () => {
      const result = getNextMonth(
        startingMonth,
        undefined,
        {
          numberOfMonths,
          pagedNavigation
        },
        dateLib
      );
      const expectedNextMonth = addMonths(startingMonth, 1);
      expect(result && isSameMonth(result, expectedNextMonth)).toBeTruthy();
    });
    describe("when the to-date is ahead less than 3 months", () => {
      it("the next month is undefined", () => {
        const result = getNextMonth(
          startingMonth,
          addMonths(startingMonth, 2),
          {
            numberOfMonths,
            pagedNavigation
          },
          dateLib
        );
        expect(result).toBe(undefined);
      });
    });
  });
});
