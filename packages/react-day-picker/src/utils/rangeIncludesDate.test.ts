import { addDays } from "date-fns/addDays";

import type { DateRange } from "../types";

import { rangeIncludesDate } from "./rangeIncludesDate";

const date = new Date();

describe('when range is missing the "from" date', () => {
  const range: DateRange = { from: undefined };
  const result = rangeIncludesDate(range, date);
  test("should return false", () => {
    expect(result).toBe(false);
  });
});

describe('when range is missing the "to" date', () => {
  const result = rangeIncludesDate({ from: date, to: undefined }, date);
  test("should return true", () => {
    expect(result).toBe(true);
  });
});

describe("when the range dates are the same as date", () => {
  const range: DateRange = { from: date, to: date };
  const result = rangeIncludesDate(range, date);
  test("should return true", () => {
    expect(result).toBe(true);
  });
});

describe("when the range dates are the same but not as date", () => {
  const range: DateRange = { from: date, to: date };
  const result = rangeIncludesDate(range, addDays(date, 1));
  test("should return false", () => {
    expect(result).toBe(false);
  });
});

describe("when the range is inverted", () => {
  const range: DateRange = { from: addDays(date, 1), to: date };
  const result = rangeIncludesDate(range, date);
  test("should return true", () => {
    expect(result).toBe(true);
  });
});
