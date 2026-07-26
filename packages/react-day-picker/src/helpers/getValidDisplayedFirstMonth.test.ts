import { addMonths, isSameDay, isSameMonth, startOfMonth } from "date-fns";

import { defaultDateLib } from "../classes/DateLib";

import { getValidDisplayedFirstMonth } from "./getValidDisplayedFirstMonth";

test("return start of month", () => {
  const month = new Date(2010, 11, 12);
  const initialMonth = getValidDisplayedFirstMonth(
    month,
    1,
    undefined,
    undefined,
    defaultDateLib,
  );
  expect(isSameDay(initialMonth, startOfMonth(month))).toBe(true);
});

describe("when no startMonth and endMonth are given", () => {
  const month = new Date(2010, 11, 12);
  const startMonth = addMonths(month, -1);
  const endMonth = addMonths(month, 1);
  test("return month if within range", () => {
    const initialMonth = getValidDisplayedFirstMonth(
      month,
      1,
      startMonth,
      endMonth,
      defaultDateLib,
    );
    expect(isSameMonth(initialMonth, month)).toBe(true);
  });

  test("return startMonth if numberOfMonths value is longer than the valid range when month is after endMonth", () => {
    const newMonth = addMonths(month, 2);
    const initialMonth = getValidDisplayedFirstMonth(
      newMonth,
      6,
      startMonth,
      endMonth,
      defaultDateLib,
    );
    expect(isSameMonth(initialMonth, startMonth)).toBe(true);
  });
});

describe("when startMonth is given and is after the default initial month", () => {
  test("return the startMonth", () => {
    const month = new Date(2010, 11, 12);
    const startMonth = addMonths(month, 1);
    const initialMonth = getValidDisplayedFirstMonth(
      month,
      3,
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
      test("returns the endMonth as the initial month so the last displayed month does not exceed endMonth", () => {
        const initialMonth = getValidDisplayedFirstMonth(
          month,
          1,
          undefined,
          endMonth,
          defaultDateLib,
        );
        expect(isSameMonth(initialMonth, endMonth)).toBe(true);
      });
    });
    describe("when the number of month is 3", () => {
      test("returns the initial month so that initialMonth + 2 months = endMonth (last displayed month is endMonth)", () => {
        const initialMonth = getValidDisplayedFirstMonth(
          month,
          3,
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
