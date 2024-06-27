import type { Locale } from "date-fns";
// Adjust the import path
import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  startOfISOWeek,
  endOfISOWeek,
  startOfWeek,
  endOfWeek
} from "date-fns";

import type { PropsContextValue } from "../contexts/useProps";
import { dateLib } from "..";
import type { MoveFocusBy, MoveFocusDir } from "../types";

import { getPossibleFocusDate } from "./getPossibleFocusDate";

const baseDate = new Date(2023, 0, 1); // Jan 1, 2023
const options: Pick<
  PropsContextValue,
  "locale" | "ISOWeek" | "weekStartsOn" | "startMonth" | "endMonth" | "dateLib"
> = {
  locale: undefined,
  ISOWeek: false,
  weekStartsOn: 0, // Sunday
  startMonth: new Date(2022, 0, 1), // Jan 1, 2022
  endMonth: new Date(2024, 0, 1), // Jan 1, 2024
  dateLib
};

const testCases: {
  moveBy: MoveFocusBy;
  moveDir: MoveFocusDir;
  expectedFn: (date: Date | number, amount: number) => Date;
}[] = [
    { moveBy: "day", moveDir: "after", expectedFn: addDays },
    { moveBy: "day", moveDir: "before", expectedFn: addDays },
    { moveBy: "month", moveDir: "after", expectedFn: addMonths },
    { moveBy: "month", moveDir: "before", expectedFn: addMonths },
    { moveBy: "week", moveDir: "after", expectedFn: addWeeks },
    { moveBy: "week", moveDir: "before", expectedFn: addWeeks },
    { moveBy: "year", moveDir: "after", expectedFn: addYears },
    { moveBy: "year", moveDir: "before", expectedFn: addYears }
  ];

testCases.forEach(({ moveBy, moveDir, expectedFn }) => {
  test(`should move ${moveDir} by ${moveBy}`, () => {
    const expectedDate = expectedFn(baseDate, moveDir === "after" ? 1 : -1);
    const result = getPossibleFocusDate(moveBy, moveDir, baseDate, options);
    expect(result).toEqual(expectedDate);
  });
});

const weekTestCases: {
  moveBy: MoveFocusBy;
  moveDir: MoveFocusDir;
  expectedFn: (
    date: number | Date,
    options?:
      | {
        locale?: Locale | undefined;
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
      }
      | undefined
  ) => Date;
}[] = [
    { moveBy: "endOfWeek", moveDir: "after", expectedFn: endOfWeek },
    { moveBy: "startOfWeek", moveDir: "after", expectedFn: startOfWeek }
  ];

weekTestCases.forEach(({ moveBy, moveDir, expectedFn }) => {
  test(`should move ${moveDir} by ${moveBy}`, () => {
    const expectedDate = expectedFn(baseDate);
    const result = getPossibleFocusDate(moveBy, moveDir, baseDate, options);

    expect(result).toEqual(expectedDate);
  });
});

const ISOWeekTestCases: {
  moveBy: MoveFocusBy;
  moveDir: MoveFocusDir;
  expectedFn: (date: Date | number) => Date;
}[] = [
    { moveBy: "endOfWeek", moveDir: "after", expectedFn: endOfISOWeek },
    { moveBy: "startOfWeek", moveDir: "after", expectedFn: startOfISOWeek }
  ];

ISOWeekTestCases.forEach(({ moveBy, moveDir, expectedFn }) => {
  test(`should move ${moveDir} by ${moveBy} when ISOWeek is true`, () => {
    const expectedDate = expectedFn(baseDate);
    const result = getPossibleFocusDate(moveBy, moveDir, baseDate, {
      ...options,
      ISOWeek: true
    });
    expect(result).toEqual(expectedDate);
  });
});

test("should not move before startMonth", () => {
  const result = getPossibleFocusDate(
    "day",
    "before",
    new Date(2022, 0, 2),
    options
  );
  expect(result).toEqual(options.startMonth);
});

test("should not move after endMonth", () => {
  const result = getPossibleFocusDate(
    "day",
    "after",
    new Date(2023, 11, 31),
    options
  );
  expect(result).toEqual(options.endMonth);
});
