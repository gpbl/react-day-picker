import { TZDate } from "@date-fns/tz";
import { addMonths, isSameDay, isSameMonth, startOfMonth } from "date-fns";
import { DateLib, defaultDateLib } from "../classes/DateLib";
import { getInitialMonth } from "./getInitialMonth";

it("return start of month", () => {
  const month = new Date(2010, 11, 12);
  const initialMonth = getInitialMonth(
    { month },
    undefined,
    undefined,
    defaultDateLib,
  );
  expect(isSameDay(initialMonth, startOfMonth(month))).toBe(true);
});

it("returns the start of month with the time zone", () => {
  const month = new Date(1935, 5, 1);
  const timeZone = "Asia/Tehran";
  const dateLib = new DateLib({ timeZone });
  const initialMonth = getInitialMonth(
    { month, timeZone, today: TZDate.tz(timeZone) },
    month,
    month,
    dateLib,
  );
  const expected = new TZDate(1935, 5, 1, timeZone);
  expect(initialMonth.getTime()).toBe(expected.getTime());
});

describe("when no startMonth or endMonth is given", () => {
  const month = new Date(2010, 11, 12);
  const defaultMonth = new Date(2011, 11, 12);
  const today = new Date(2012, 11, 12);
  describe("when month is in context", () => {
    it("return that month", () => {
      const initialMonth = getInitialMonth(
        { month, defaultMonth, today },
        undefined,
        undefined,
        defaultDateLib,
      );
      expect(isSameMonth(initialMonth, month)).toBe(true);
    });
  });
  describe("when defaultMonth is in context and no month is given", () => {
    it("return that month", () => {
      const initialMonth = getInitialMonth(
        { defaultMonth, today },
        undefined,
        undefined,
        defaultDateLib,
      );
      expect(isSameMonth(initialMonth, defaultMonth)).toBe(true);
    });
  });
  describe("when no month or defaultMonth", () => {
    it("return the today month", () => {
      const initialMonth = getInitialMonth(
        { today },
        undefined,
        undefined,
        defaultDateLib,
      );
      expect(isSameMonth(initialMonth, today)).toBe(true);
    });
  });
});

describe("when startMonth is given and is after the default initial month", () => {
  it("return the startMonth", () => {
    const month = new Date(2010, 11, 12);
    const startMonth = addMonths(month, 1);
    const initialMonth = getInitialMonth(
      { month, numberOfMonths: 3 },
      startMonth,
      undefined,
      defaultDateLib,
    );
    expect(isSameMonth(initialMonth, startMonth)).toBe(true);
  });
});

describe("when endMonth is given", () => {
  describe("when endMonth is before the default initial month", () => {
    const month = new Date(2010, 11, 12);
    const endMonth = addMonths(month, -2);
    describe("when the number of month is 1", () => {
      it("returns the endMonth as the initial month so the last displayed month does not exceed endMonth", () => {
        const initialMonth = getInitialMonth(
          { month },
          undefined,
          endMonth,
          defaultDateLib,
        );
        expect(isSameMonth(initialMonth, endMonth)).toBe(true);
      });
    });
    describe("when the number of month is 3", () => {
      it("returns the initial month so that initialMonth + 2 months = endMonth (last displayed month is endMonth)", () => {
        const initialMonth = getInitialMonth(
          { month, numberOfMonths: 3 },
          undefined,
          endMonth,
          defaultDateLib,
        );
        // The last displayed month should be endMonth, so initialMonth = endMonth - 2 months
        const expectedMonth = addMonths(endMonth, -2);
        expect(isSameMonth(initialMonth, expectedMonth)).toBe(true);
      });
    });
  });
});
