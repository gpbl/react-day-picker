import { defaultDateLib } from "../lib/dateLib";

import { getNavMonths } from "./getNavMonth";

describe('when "startMonth" is not passed in', () => {
  test('"startMonth" should be undefined', () => {
    const [navStartMonth] = getNavMonths({}, defaultDateLib);
    expect(navStartMonth).toBeUndefined();
  });
});
describe('when "startMonth" is passed in', () => {
  const [navStartMonth] = getNavMonths(
    {
      startMonth: new Date(2021, 4, 3)
    },
    defaultDateLib
  );
  test('"startMonth" should be the start of that month', () => {
    expect(navStartMonth).toEqual(new Date(2021, 4, 1));
  });
  describe('when "fromYear" is passed in', () => {
    test('"startMonth" should be the start of that month', () => {
      expect(navStartMonth).toEqual(new Date(2021, 4, 1));
    });
  });
});
describe('when "fromYear" is passed in', () => {
  const [navStartMonth] = getNavMonths({ fromYear: 2021 }, defaultDateLib);
  test('"startMonth" should be the start of that year', () => {
    expect(navStartMonth).toEqual(new Date(2021, 0, 1));
  });
});
describe('when "endMonth" is passed in', () => {
  const [, navEndMonth] = getNavMonths(
    {
      endMonth: new Date(2021, 4, 3)
    },
    defaultDateLib
  );
  test('"endMonth" should be the end of that month', () => {
    expect(navEndMonth).toEqual(new Date(2021, 4, 31));
  });
  describe('when "fromYear" is passed in', () => {
    test('"endMonth" should be the end of that month', () => {
      expect(navEndMonth).toEqual(new Date(2021, 4, 31));
    });
  });
});

describe('when "toYear" is passed in', () => {
  const toYear = 2021;
  const expectedendMonth = new Date(2021, 11, 31);
  const [, navEndMonth] = getNavMonths({ toYear }, defaultDateLib);
  test('"endMonth" should be the end of that year', () => {
    expect(navEndMonth).toEqual(expectedendMonth);
  });
});

describe('when "captionLayout" is dropdown', () => {
  const today = new Date(2024, 4, 3);
  const [navStartMonth, navEndMonth] = getNavMonths(
    {
      captionLayout: "dropdown",
      today
    },
    defaultDateLib
  );
  test('"startMonth" should be 100 years ago', () => {
    expect(navStartMonth).toEqual(new Date(1924, 0, 1));
  });
  test('"endMonth" should be the end of this year', () => {
    expect(navEndMonth).toEqual(new Date(2024, 11, 31));
  });
  describe('when "fromYear" is set', () => {
    const today = new Date(2024, 4, 3);
    const fromYear = 2022;
    const [navStartMonth, navEndMonth] = getNavMonths(
      {
        captionLayout: "dropdown",
        fromYear,
        today
      },
      defaultDateLib
    );
    test('"startMonth" should be equal to the "fromYear"', () => {
      expect(navStartMonth).toEqual(new Date(2022, 0, 1));
    });
    test('"endMonth" should be the end of this year', () => {
      expect(navEndMonth).toEqual(new Date(2024, 11, 31));
    });
  });
  describe('when "toYear" is set', () => {
    const today = new Date(2021, 4, 3);
    const toYear = 2022;
    const [navStartMonth, navEndMonth] = getNavMonths(
      {
        captionLayout: "dropdown",
        toYear,
        today
      },
      defaultDateLib
    );
    test('"startMonth" should be 100 years ago', () => {
      expect(navStartMonth).toEqual(new Date(1921, 0, 1));
    });
    test('"endMonth" should be equal to "toYear"', () => {
      expect(navEndMonth).toEqual(new Date(2022, 11, 31));
    });
  });
});
