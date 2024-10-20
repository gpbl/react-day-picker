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

import { DateLib } from "../lib/dateLib";
import type { DayPickerProps, MoveFocusBy, MoveFocusDir } from "../types";

import { getFocusableDate } from "./getFocusableDate";

const focusedDate = new Date(2023, 0, 1); // Jan 1, 2023
const options: Pick<DayPickerProps, "ISOWeek"> = {
  ISOWeek: false
};
const dateLib = new DateLib({
  weekStartsOn: 0 // Sunday
});

const calendarStartMonth = new Date(2022, 0, 1); // Jan 1, 2022
const calendarEndMonth = new Date(2024, 0, 1); // Jan 1, 2024

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
    const expectedDate = expectedFn(focusedDate, moveDir === "after" ? 1 : -1);
    const result = getFocusableDate(
      moveBy,
      moveDir,
      focusedDate,
      calendarStartMonth,
      calendarEndMonth,
      options,
      dateLib
    );
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
    const expectedDate = expectedFn(focusedDate);
    const result = getFocusableDate(
      moveBy,
      moveDir,
      focusedDate,
      calendarStartMonth,
      calendarEndMonth,
      options,
      dateLib
    );

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
    const expectedDate = expectedFn(focusedDate);
    const result = getFocusableDate(
      moveBy,
      moveDir,
      focusedDate,
      calendarStartMonth,
      calendarEndMonth,
      { ...options, ISOWeek: true },
      dateLib
    );
    expect(result).toEqual(expectedDate);
  });
});

test("should not move before startMonth", () => {
  const result = getFocusableDate(
    "day",
    "before",
    new Date(2022, 0, 2),
    calendarStartMonth,
    calendarEndMonth,
    options,
    dateLib
  );
  expect(result).toEqual(calendarStartMonth);
});

test("should not move after endMonth", () => {
  const result = getFocusableDate(
    "day",
    "after",
    new Date(2023, 11, 31),
    calendarStartMonth,
    calendarEndMonth,
    options,
    dateLib
  );
  expect(result).toEqual(calendarEndMonth);
});
