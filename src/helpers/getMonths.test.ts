import { CalendarMonth } from "../classes";
import type { UseProps } from "../contexts/useProps";
import { dateLib } from "../lib";

import { getMonths } from "./getMonths";

const mockDates = [
  new Date(2023, 4, 27), // May 1, 2023
  new Date(2023, 5, 1), // June 1, 2023
  new Date(2023, 5, 8), // June 2, 2023
  new Date(2023, 5, 15), // June 15, 2023
  new Date(2023, 5, 22), // June 22, 2023
  new Date(2023, 5, 30), // June 30, 2023
  new Date(2023, 6, 6) // June 30, 2023
];

const mockProps: Pick<
  UseProps,
  | "fixedWeeks"
  | "ISOWeek"
  | "locale"
  | "weekStartsOn"
  | "reverseMonths"
  | "firstWeekContainsDate"
  | "dateLib"
> = {
  fixedWeeks: false,
  ISOWeek: false,
  locale: undefined,
  weekStartsOn: 0, // Sunday
  reverseMonths: false,
  firstWeekContainsDate: 1,
  dateLib
};

it("should return the correct months without ISO weeks and reverse months", () => {
  const displayMonths = [new Date(2023, 5, 1)]; // June 2023

  const result = getMonths(displayMonths, mockDates, mockProps);

  expect(result).toHaveLength(1);
  expect(result[0]).toBeInstanceOf(CalendarMonth);
  expect(result[0].weeks).toHaveLength(5); // June 2023 has 5 weeks
});

it("should handle ISO weeks", () => {
  const displayMonths = [new Date(2023, 5, 1)]; // June 2023

  const isoProps = { ...mockProps, ISOWeek: true };

  const result = getMonths(displayMonths, mockDates, isoProps);

  expect(result).toHaveLength(1);
  expect(result[0]).toBeInstanceOf(CalendarMonth);
  expect(result[0].weeks).toHaveLength(5); // June 2023 has 5 ISO weeks
});

it("should handle reverse months", () => {
  const displayMonths = [
    new Date(2023, 4, 1), // May 2023
    new Date(2023, 5, 1) // June 2023
  ];

  const reverseProps = { ...mockProps, reverseMonths: true };

  const result = getMonths(displayMonths, mockDates, reverseProps);

  expect(result).toHaveLength(2);
  expect(result[0].date).toEqual(new Date(2023, 5, 1)); // June 2023
  expect(result[1].date).toEqual(new Date(2023, 4, 1)); // May 2023
});

it("should handle fixed weeks", () => {
  const displayMonths = [new Date(2023, 5, 1)]; // June 2023

  const fixedWeeksProps = { ...mockProps, fixedWeeks: true };

  const result = getMonths(displayMonths, mockDates, fixedWeeksProps);

  expect(result).toHaveLength(1);
  expect(result[0]).toBeInstanceOf(CalendarMonth);
  expect(result[0].weeks).toHaveLength(6); // Fixed weeks should ensure 6 weeks in the month view
});

it("should handle months with no dates", () => {
  const displayMonths = [new Date(2023, 5, 1)]; // June 2023

  const result = getMonths(displayMonths, [], mockProps);

  expect(result).toHaveLength(1);
  expect(result[0]).toBeInstanceOf(CalendarMonth);
  expect(result[0].weeks).toHaveLength(0); // No dates should result in no weeks
});
