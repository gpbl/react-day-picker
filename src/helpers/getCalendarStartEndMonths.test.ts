import { dateLib } from "../lib";

import { getCalendarStartEndMonths } from "./getCalendarStartEndMonths";

describe('when "startMonth" is not passed in', () => {
  test('"startMonth" should be undefined', () => {
    const { calendarStartMonth } = getCalendarStartEndMonths({}, dateLib);
    expect(calendarStartMonth).toBeUndefined();
  });
});
describe('when "startMonth" is passed in', () => {
  const { calendarStartMonth } = getCalendarStartEndMonths(
    {
      startMonth: new Date(2021, 4, 3)
    },
    dateLib
  );
  test('"startMonth" should be the start of that month', () => {
    expect(calendarStartMonth).toEqual(new Date(2021, 4, 1));
  });
  describe('when "fromYear" is passed in', () => {
    test('"startMonth" should be the start of that month', () => {
      expect(calendarStartMonth).toEqual(new Date(2021, 4, 1));
    });
  });
});
describe('when "fromYear" is passed in', () => {
  const { calendarStartMonth } = getCalendarStartEndMonths(
    { fromYear: 2021 },
    dateLib
  );
  test('"startMonth" should be the start of that year', () => {
    expect(calendarStartMonth).toEqual(new Date(2021, 0, 1));
  });
});
describe('when "endMonth" is passed in', () => {
  const { calendarEndMonth } = getCalendarStartEndMonths(
    {
      endMonth: new Date(2021, 4, 3)
    },
    dateLib
  );
  test('"endMonth" should be the end of that month', () => {
    expect(calendarEndMonth).toEqual(new Date(2021, 4, 31));
  });
  describe('when "fromYear" is passed in', () => {
    test('"endMonth" should be the end of that month', () => {
      expect(calendarEndMonth).toEqual(new Date(2021, 4, 31));
    });
  });
});

describe('when "toYear" is passed in', () => {
  const toYear = 2021;
  const expectedendMonth = new Date(2021, 11, 31);
  const { calendarEndMonth } = getCalendarStartEndMonths({ toYear }, dateLib);
  test('"endMonth" should be the end of that year', () => {
    expect(calendarEndMonth).toEqual(expectedendMonth);
  });
});

describe('when "captionLayout" is dropdown', () => {
  const today = new Date(2024, 4, 3);
  const { calendarStartMonth, calendarEndMonth } = getCalendarStartEndMonths(
    {
      captionLayout: "dropdown",
      today
    },
    dateLib
  );
  test('"startMonth" should be 100 years ago', () => {
    expect(calendarStartMonth).toEqual(new Date(1924, 0, 1));
  });
  test('"endMonth" should be the end of this year', () => {
    expect(calendarEndMonth).toEqual(new Date(2024, 11, 31));
  });
  describe('when "fromYear" is set', () => {
    const today = new Date(2024, 4, 3);
    const fromYear = 2022;
    const { calendarStartMonth, calendarEndMonth } = getCalendarStartEndMonths(
      {
        captionLayout: "dropdown",
        fromYear,
        today
      },
      dateLib
    );
    test('"startMonth" should be equal to the "fromYear"', () => {
      expect(calendarStartMonth).toEqual(new Date(2022, 0, 1));
    });
    test('"endMonth" should be the end of this year', () => {
      expect(calendarEndMonth).toEqual(new Date(2024, 11, 31));
    });
  });
  describe('when "toYear" is set', () => {
    const today = new Date(2021, 4, 3);
    const toYear = 2022;
    const { calendarEndMonth, calendarStartMonth } = getCalendarStartEndMonths(
      {
        captionLayout: "dropdown",
        toYear,
        today
      },
      dateLib
    );
    test('"startMonth" should be 100 years ago', () => {
      expect(calendarStartMonth).toEqual(new Date(1921, 0, 1));
    });
    test('"endMonth" should be equal to "toYear"', () => {
      expect(calendarEndMonth).toEqual(new Date(2022, 11, 31));
    });
  });
});
