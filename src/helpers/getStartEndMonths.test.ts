import { getStartEndMonths } from "./getStartEndMonths";

describe('when "startMonth" is not passed in', () => {
  test('"startMonth" should be undefined', () => {
    const { startMonth } = getStartEndMonths({});
    expect(startMonth).toBeUndefined();
  });
});
describe('when "startMonth" is passed in', () => {
  const { startMonth } = getStartEndMonths({
    startMonth: new Date(2021, 4, 3)
  });
  test('"startMonth" should be the start of that month', () => {
    expect(startMonth).toEqual(new Date(2021, 4, 1));
  });
  describe('when "fromYear" is passed in', () => {
    test('"startMonth" should be the start of that month', () => {
      expect(startMonth).toEqual(new Date(2021, 4, 1));
    });
  });
});
describe('when "fromYear" is passed in', () => {
  const { startMonth } = getStartEndMonths({ fromYear: 2021 });
  test('"startMonth" should be the start of that year', () => {
    expect(startMonth).toEqual(new Date(2021, 0, 1));
  });
});
describe('when "endMonth" is passed in', () => {
  const { endMonth } = getStartEndMonths({ endMonth: new Date(2021, 4, 3) });
  test('"endMonth" should be the end of that month', () => {
    expect(endMonth).toEqual(new Date(2021, 4, 31));
  });
  describe('when "fromYear" is passed in', () => {
    test('"endMonth" should be the end of that month', () => {
      expect(endMonth).toEqual(new Date(2021, 4, 31));
    });
  });
});

describe('when "toYear" is passed in', () => {
  const toYear = 2021;
  const expectedendMonth = new Date(2021, 11, 31);
  const { endMonth } = getStartEndMonths({ toYear });
  test('"endMonth" should be the end of that year', () => {
    expect(endMonth).toEqual(expectedendMonth);
  });
});

describe('when "captionLayout" is dropdown', () => {
  const today = new Date(2024, 4, 3);
  const { startMonth, endMonth } = getStartEndMonths({
    captionLayout: "dropdown",
    today
  });
  test('"startMonth" should be 100 years ago', () => {
    expect(startMonth).toEqual(new Date(1924, 0, 1));
  });
  test('"endMonth" should be the end of this year', () => {
    expect(endMonth).toEqual(new Date(2024, 11, 31));
  });
  describe('when "fromYear" is set', () => {
    const today = new Date(2024, 4, 3);
    const fromYear = 2022;
    const { startMonth, endMonth } = getStartEndMonths({
      captionLayout: "dropdown",
      fromYear,
      today
    });
    test('"startMonth" should be equal to the "fromYear"', () => {
      expect(startMonth).toEqual(new Date(2022, 0, 1));
    });
    test('"endMonth" should be the end of this year', () => {
      expect(endMonth).toEqual(new Date(2024, 11, 31));
    });
  });
  describe('when "toYear" is set', () => {
    const today = new Date(2021, 4, 3);
    const toYear = 2022;
    const { endMonth, startMonth } = getStartEndMonths({
      captionLayout: "dropdown",
      toYear,
      today
    });
    test('"startMonth" should be 100 years ago', () => {
      expect(startMonth).toEqual(new Date(1921, 0, 1));
    });
    test('"endMonth" should be equal to "toYear"', () => {
      expect(endMonth).toEqual(new Date(2022, 11, 31));
    });
  });
});
