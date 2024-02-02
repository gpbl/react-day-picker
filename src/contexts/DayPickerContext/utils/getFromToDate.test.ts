import { getFromToDate } from "./getFromToDate";

describe('when "fromMonth" is not passed in', () => {
  test('"fromDate" should be undefined', () => {
    const { fromDate } = getFromToDate({});
    expect(fromDate).toBeUndefined();
  });
});
describe('when "fromMonth" is passed in', () => {
  const fromMonth = new Date(2021, 4, 3);
  const expectedFromDate = new Date(2021, 4, 1);
  const { fromDate } = getFromToDate({ fromMonth });
  test('"fromDate" should be the start of that month', () => {
    expect(fromDate).toEqual(expectedFromDate);
  });
  describe('when "fromYear" is passed in', () => {
    test('"fromDate" should be the start of that month', () => {
      expect(fromDate).toEqual(expectedFromDate);
    });
  });
});
describe('when "fromYear" is passed in', () => {
  const fromYear = 2021;
  const expectedFromDate = new Date(2021, 0, 1);
  const { fromDate } = getFromToDate({ fromYear });
  test('"fromDate" should be the start of that year', () => {
    expect(fromDate).toEqual(expectedFromDate);
  });
});
describe('when "toMonth" is passed in', () => {
  const toMonth = new Date(2021, 4, 3);
  const expectedToDate = new Date(2021, 4, 31);
  const { toDate } = getFromToDate({ toMonth });
  test('"toDate" should be the end of that month', () => {
    expect(toDate).toEqual(expectedToDate);
  });
  describe('when "fromYear" is passed in', () => {
    test('"toDate" should be the end of that month', () => {
      expect(toDate).toEqual(expectedToDate);
    });
  });
});

describe('when "toYear" is passed in', () => {
  const toYear = 2021;
  const expectedToDate = new Date(2021, 11, 31);
  const { toDate } = getFromToDate({ toYear });
  test('"toDate" should be the end of that year', () => {
    expect(toDate).toEqual(expectedToDate);
  });
});

describe('when "showCaption" is passed in', () => {
  const today = new Date(2024, 4, 3);
  const { fromDate, toDate } = getFromToDate({
    dropdownNavigation: true,
    today,
  });
  test('"fromDate" should be 100 years ago', () => {
    expect(fromDate).toEqual(new Date(1924, 0, 1));
  });
  test('"toDate" should be the end of this year', () => {
    expect(toDate).toEqual(new Date(2024, 11, 31));
  });
});

describe('when "fromYear" and "showCaption" are passed in', () => {
  const today = new Date(2024, 4, 3);
  const fromYear = 2022;
  const { fromDate, toDate } = getFromToDate({
    dropdownNavigation: true,
    fromYear,
    today,
  });
  test('"fromDate" should be equal to the "fromYear"', () => {
    expect(fromDate).toEqual(new Date(2022, 0, 1));
  });
  test('"toDate" should be the end of this year', () => {
    expect(toDate).toEqual(new Date(2024, 11, 31));
  });
});
describe('when "toYear" and "showCaption" are passed in', () => {
  const today = new Date(2021, 4, 3);
  const toYear = 2022;
  const { toDate, fromDate } = getFromToDate({
    dropdownNavigation: true,
    toYear,
    today,
  });
  test('"fromDate" should be 100 years ago', () => {
    expect(fromDate).toEqual(new Date(1921, 0, 1));
  });
  test('"toDate" should be equal to "toYear"', () => {
    expect(toDate).toEqual(new Date(2022, 11, 31));
  });
});
