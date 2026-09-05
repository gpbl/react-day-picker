import { addMonths, isSameDay, isSameMonth, startOfMonth } from "date-fns";

import { defaultDateLib } from "../classes/DateLib";

import { getValidDisplayedFirstMonth } from "./getValidDisplayedFirstMonth";

test("return start of month", () => {
  const displayedFirstMonth = new Date(2010, 11, 12);
  const validDisplayedFirstMonth = getValidDisplayedFirstMonth(
    displayedFirstMonth,
    1,
    undefined,
    undefined,
    defaultDateLib,
  );
  expect(
    isSameDay(validDisplayedFirstMonth, startOfMonth(displayedFirstMonth)),
  ).toBe(true);
});

describe("when no navStart and navEnd are given", () => {
  const displayedFirstMonth = new Date(2010, 11, 12);
  const navStart = addMonths(displayedFirstMonth, -1);
  const navEnd = addMonths(displayedFirstMonth, 1);
  test("return displayedFirstMonth if within range", () => {
    const validDisplayedFirstMonth = getValidDisplayedFirstMonth(
      displayedFirstMonth,
      1,
      navStart,
      navEnd,
      defaultDateLib,
    );
    expect(isSameMonth(validDisplayedFirstMonth, displayedFirstMonth)).toBe(
      true,
    );
  });

  test("return navStart if numberOfMonths value is longer than the valid range when month is after navEnd", () => {
    const newDisplayedFirstMonth = addMonths(displayedFirstMonth, 2);
    const validDisplayedFirstMonth = getValidDisplayedFirstMonth(
      newDisplayedFirstMonth,
      6,
      navStart,
      navEnd,
      defaultDateLib,
    );
    expect(isSameMonth(validDisplayedFirstMonth, navStart)).toBe(true);
  });
});

describe("when navStart is given and is after the displayedFirstMonth", () => {
  test("return the navStart", () => {
    const displayedFirstMonth = new Date(2010, 11, 12);
    const navStart = addMonths(displayedFirstMonth, 1);
    const validDisplayedFirstMonth = getValidDisplayedFirstMonth(
      displayedFirstMonth,
      3,
      navStart,
      undefined,
      defaultDateLib,
    );
    expect(isSameMonth(validDisplayedFirstMonth, navStart)).toBe(true);
  });
});

describe("when navEnd is given", () => {
  describe("when navEnd is before the displayedFirstMonth", () => {
    const displayedFirstMonth = new Date(2010, 11, 12);
    const navEnd = addMonths(displayedFirstMonth, -2);
    describe("when the number of month is 1", () => {
      test("returns the navEnd so the last displayed month does not exceed navEnd", () => {
        const validDisplayedFirstMonth = getValidDisplayedFirstMonth(
          displayedFirstMonth,
          1,
          undefined,
          navEnd,
          defaultDateLib,
        );
        expect(isSameMonth(validDisplayedFirstMonth, navEnd)).toBe(true);
      });
    });
    describe("when the number of month is 3", () => {
      test("returns the month so that displayedFirstMonth + 2 months = navEnd (last displayed month is navEnd)", () => {
        const validDisplayedFirstMonth = getValidDisplayedFirstMonth(
          displayedFirstMonth,
          3,
          undefined,
          navEnd,
          defaultDateLib,
        );
        // The last displayed month should be navEnd, so initialMonth = navEnd - 2 months
        const expectedMonth = addMonths(navEnd, -2);
        expect(isSameMonth(validDisplayedFirstMonth, expectedMonth)).toBe(true);
      });
    });
  });
});
