import { addToRange } from "./addToRange";

describe("addToRange", () => {
  test("add a date to an undefined range", () => {
    const date = new Date(2022, 0, 1);
    const range = addToRange(date, undefined);
    expect(range).toEqual({ from: date, to: date });
  });

  test("add a date to an empty range", () => {
    const date = new Date(2022, 0, 1);
    const range = addToRange(date, { from: undefined, to: undefined });
    expect(range).toEqual({ from: date, to: date });
  });

  test("add a date to an incomplete range with same start date", () => {
    const date = new Date(2022, 0, 1);
    const range = addToRange(date, { from: date, to: undefined });
    expect(range).toEqual({ from: undefined, to: undefined });
  });

  test("add a date to an incomplete range with earlier date", () => {
    const from = new Date(2022, 0, 1);
    const earlierDate = new Date(2021, 11, 31);
    const range = addToRange(earlierDate, { from: from, to: undefined });
    expect(range).toEqual({ from: earlierDate, to: from });
  });

  test("add a date to an incomplete range with later date", () => {
    const from = new Date(2022, 0, 1);
    const date = new Date(2022, 0, 2);
    const range = addToRange(date, { from: from, to: undefined });
    expect(range).toEqual({ from: from, to: date });
  });

  test("add a date to a complete range with same start and end date", () => {
    const date = new Date(2022, 0, 1);
    const from = date;
    const to = date;
    const range = addToRange(date, { from, to }, 0, 0, false);
    expect(range).toEqual({ from: undefined, to: undefined });
  });

  test("add a date to a complete range with same start date", () => {
    const date = new Date(2022, 0, 1);
    const to = new Date(2022, 0, 2);
    const range = addToRange(date, { from: date, to: to });
    expect(range).toEqual({ from: date, to: date });
  });

  test("add a date to a complete range with same end date", () => {
    const date = new Date(2022, 0, 2);
    const from = new Date(2022, 0, 1);
    const range = addToRange(date, { from: from, to: date });
    expect(range).toEqual({ from: date, to: date });
  });

  test("add a date when inside the range", () => {
    const date = new Date(2022, 0, 1);
    const from = new Date(2021, 11, 31);
    const to = new Date(2022, 0, 2);
    const range = addToRange(date, { from, to });
    expect(range).toEqual({ from, to: date });
  });

  test("add an earlier date to a complete range", () => {
    const from = new Date(2022, 0, 1);
    const to = new Date(2022, 0, 2);
    const date = new Date(2021, 11, 31);
    const range = addToRange(date, { from, to });
    expect(range).toEqual({ from: date, to: to });
  });

  test("add a later date to a complete range", () => {
    const date = new Date(2022, 0, 2);
    const from = new Date(2021, 11, 31);
    const to = new Date(2022, 0, 1);
    const range = addToRange(date, { from, to });
    expect(range).toEqual({ from: from, to: date });
  });

  test("add a date with min > 0", () => {
    const date = new Date(2022, 0, 1);
    const range = addToRange(date, undefined, 1, 0, false);
    expect(range).toEqual({ from: date, to: undefined });
  });

  test("add a date with max > 0", () => {
    const date = new Date(2022, 0, 1);
    const range = addToRange(date, undefined, 0, 1, false);
    expect(range).toEqual({ from: date, to: date });
  });

  test("add a date with required set to true", () => {
    const date = new Date(2022, 0, 1);
    const range = addToRange(date, undefined, 0, 0, true);
    expect(range).toEqual({ from: date, to: date });
  });

  test("when exceeding max, set the start of the range", () => {
    const from = new Date(2022, 0, 1);
    const to = new Date(2022, 0, 2);
    const date = new Date(2022, 0, 4);
    const max = 2;
    const range = addToRange(date, { from, to }, 0, max, false);
    expect(range).toEqual({ from: date, to: undefined });
  });

  test("when below min, set the start of the range", () => {
    const from = new Date(2021, 11, 20);
    const to = new Date(2022, 0, 2);
    const date = new Date(2021, 11, 21);
    const min = 5;
    const range = addToRange(date, { from, to }, min, 0, false);
    expect(range).toEqual({ from: date, to: undefined });
  });
});
