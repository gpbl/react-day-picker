import { getStartEndMonths } from "./getStartEndMonths";

describe('when "fromMonth" is not passed in', () => {
  test('"fromMonth" should be undefined', () => {
    const { fromMonth } = getStartEndMonths({});
    expect(fromMonth).toBeUndefined();
  });
});
describe('when "fromMonth" is passed in', () => {
  const { fromMonth } = getStartEndMonths({ fromMonth: new Date(2021, 4, 3) });
  test('"fromMonth" should be the start of that month', () => {
    expect(fromMonth).toEqual(new Date(2021, 4, 1));
  });
  describe('when "fromYear" is passed in', () => {
    test('"fromMonth" should be the start of that month', () => {
      expect(fromMonth).toEqual(new Date(2021, 4, 1));
    });
  });
});
describe('when "fromYear" is passed in', () => {
  const { fromMonth } = getStartEndMonths({ fromYear: 2021 });
  test('"fromMonth" should be the start of that year', () => {
    expect(fromMonth).toEqual(new Date(2021, 0, 1));
  });
});
describe('when "toMonth" is passed in', () => {
  const { toMonth } = getStartEndMonths({ toMonth: new Date(2021, 4, 3) });
  test('"toMonth" should be the end of that month', () => {
    expect(toMonth).toEqual(new Date(2021, 4, 31));
  });
  describe('when "fromYear" is passed in', () => {
    test('"toMonth" should be the end of that month', () => {
      expect(toMonth).toEqual(new Date(2021, 4, 31));
    });
  });
});

describe('when "toYear" is passed in', () => {
  const toYear = 2021;
  const expectedtoMonth = new Date(2021, 11, 31);
  const { toMonth } = getStartEndMonths({ toYear });
  test('"toMonth" should be the end of that year', () => {
    expect(toMonth).toEqual(expectedtoMonth);
  });
});

describe('when "captionLayout" is dropdown', () => {
  const today = new Date(2024, 4, 3);
  const { fromMonth, toMonth } = getStartEndMonths({
    captionLayout: "dropdown",
    today
  });
  test('"fromMonth" should be 100 years ago', () => {
    expect(fromMonth).toEqual(new Date(1924, 0, 1));
  });
  test('"toMonth" should be the end of this year', () => {
    expect(toMonth).toEqual(new Date(2024, 11, 31));
  });
  describe('when "fromYear" is set', () => {
    const today = new Date(2024, 4, 3);
    const fromYear = 2022;
    const { fromMonth, toMonth } = getStartEndMonths({
      captionLayout: "dropdown",
      fromYear,
      today
    });
    test('"fromMonth" should be equal to the "fromYear"', () => {
      expect(fromMonth).toEqual(new Date(2022, 0, 1));
    });
    test('"toMonth" should be the end of this year', () => {
      expect(toMonth).toEqual(new Date(2024, 11, 31));
    });
  });
  describe('when "toYear" is set', () => {
    const today = new Date(2021, 4, 3);
    const toYear = 2022;
    const { toMonth, fromMonth } = getStartEndMonths({
      captionLayout: "dropdown",
      toYear,
      today
    });
    test('"fromMonth" should be 100 years ago', () => {
      expect(fromMonth).toEqual(new Date(1921, 0, 1));
    });
    test('"toMonth" should be equal to "toYear"', () => {
      expect(toMonth).toEqual(new Date(2022, 11, 31));
    });
  });
});
