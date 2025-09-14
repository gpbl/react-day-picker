import {
  addYears,
  endOfMonth,
  endOfYear,
  startOfDay,
  startOfMonth,
  startOfYear,
} from "date-fns";
import type { DayPickerProps } from "react-day-picker/types";

import { defaultDateLib } from "../classes/DateLib";

import { getNavMonths } from "./getNavMonth";

describe('when "startMonth" is not set', () => {
  test('"startMonth" should be undefined', () => {
    const [navStartMonth] = getNavMonths({}, defaultDateLib);
    expect(navStartMonth).toBeUndefined();
  });
});
describe('when "startMonth" is set', () => {
  const startMonth = new Date(2021, 4, 3);
  const props: DayPickerProps = { startMonth };
  test('"startMonth" should be the start of that month', () => {
    const [navStartMonth] = getNavMonths(props, defaultDateLib);
    const startOfThatMonth = startOfMonth(startMonth);
    expect(navStartMonth).toEqual(startOfThatMonth);
  });
  describe('when "fromYear" is set', () => {
    const fromYear = 2021;
    test('"startMonth" should be the start of that month', () => {
      const [navStartMonth] = getNavMonths(
        { ...props, fromYear },
        defaultDateLib,
      );
      const startOfThatMonth = startOfMonth(startMonth);
      expect(navStartMonth).toEqual(startOfThatMonth);
    });
  });
});
describe('when "fromYear" is set', () => {
  const fromYear = 2021;
  const props: DayPickerProps = { fromYear };
  test('"startMonth" should be the start of that year', () => {
    const [navStartMonth] = getNavMonths(props, defaultDateLib);
    const startOfThatYear = new Date(fromYear, 0, 1);
    expect(navStartMonth).toEqual(startOfThatYear);
  });
});
describe('when "endMonth" is set', () => {
  const endMonth = new Date(2021, 4, 3);
  const props: DayPickerProps = { endMonth };
  test('"endMonth" should be the end of that month', () => {
    const [, navEndMonth] = getNavMonths(props, defaultDateLib);
    const endOfThatMonth = startOfDay(endOfMonth(endMonth));
    expect(navEndMonth).toEqual(endOfThatMonth);
  });
  describe('when "fromYear" is set', () => {
    const fromYear = 2021;
    test('"endMonth" should be the end of that month', () => {
      const [, navEndMonth] = getNavMonths(
        { ...props, fromYear },
        defaultDateLib,
      );
      const endOfThatMonth = startOfDay(endOfMonth(endMonth));
      expect(navEndMonth).toEqual(endOfThatMonth);
    });
  });
});

describe('when "toYear" is set', () => {
  const toYear = 2021;
  const props: DayPickerProps = { toYear };
  test('"endMonth" should be the end of that year', () => {
    const [, navEndMonth] = getNavMonths(props, defaultDateLib);
    expect(navEndMonth).toEqual(new Date(toYear, 11, 31));
  });
});

describe.each([["dropdown" as const], ["dropdown-years" as const]])(
  'when "captionLayout" is "%s"',
  (captionLayout) => {
    const today = new Date(2024, 4, 3);
    const props: DayPickerProps = { captionLayout, today };

    test('"startMonth" should be 100 years ago', () => {
      const [navStartMonth] = getNavMonths(props, defaultDateLib);
      const startOf100YearsAgo = startOfYear(addYears(today, -100));
      expect(navStartMonth).toEqual(startOf100YearsAgo);
    });
    test('"endMonth" should be the end of this year', () => {
      const [, navEndMonth] = getNavMonths(props, defaultDateLib);
      const endOfThisYear = startOfDay(endOfYear(today));
      expect(navEndMonth).toEqual(endOfThisYear);
    });

    describe('when "startMonth" is set', () => {
      const today = new Date(2024, 4, 3);
      const startMonth = new Date(2021, 4, 3);
      const props: DayPickerProps = { captionLayout, startMonth, today };
      test('"startMonth" should be the start of that month', () => {
        const [navStartMonth] = getNavMonths(props, defaultDateLib);
        const startOfThatMonth = startOfMonth(startMonth);
        expect(navStartMonth).toEqual(startOfThatMonth);
      });
      test('"endMonth" should be the end of this year', () => {
        const [, navEndMonth] = getNavMonths(props, defaultDateLib);
        const endOfThisYear = startOfDay(endOfYear(today));
        expect(navEndMonth).toEqual(endOfThisYear);
      });
    });

    describe('when "endMonth" is set', () => {
      const today = new Date(2021, 4, 3);
      const endMonth = new Date(2022, 4, 3);
      const props: DayPickerProps = { captionLayout, endMonth, today };

      test('"startMonth" should be 100 years ago', () => {
        const [navStartMonth] = getNavMonths(props, defaultDateLib);
        const startOf100YearsAgo = startOfYear(addYears(today, -100));
        expect(navStartMonth).toEqual(startOf100YearsAgo);
      });
      test('"endMonth" should be the end of that month', () => {
        const [, navEndMonth] = getNavMonths(props, defaultDateLib);
        expect(navEndMonth).toEqual(startOfDay(endOfMonth(endMonth)));
      });
    });

    describe('when "fromYear" is set', () => {
      const today = new Date(2024, 4, 3);
      const fromYear = 2022;
      const props: DayPickerProps = { captionLayout, fromYear, today };

      test('"startMonth" should be equal to the "fromYear"', () => {
        const [navStartMonth] = getNavMonths(props, defaultDateLib);
        const startOfThatYear = new Date(fromYear, 0, 1);
        expect(navStartMonth).toEqual(startOfThatYear);
      });
      test('"endMonth" should be the end of this year', () => {
        const [, navEndMonth] = getNavMonths(props, defaultDateLib);
        const endOfThisYear = startOfDay(endOfYear(today));
        expect(navEndMonth).toEqual(endOfThisYear);
      });
    });

    describe('when "toYear" is set', () => {
      const today = new Date(2021, 4, 3);
      const toYear = 2022;
      const props: DayPickerProps = { captionLayout, toYear, today };

      test('"startMonth" should be 100 years ago', () => {
        const [navStartMonth] = getNavMonths(props, defaultDateLib);
        expect(navStartMonth).toEqual(startOfYear(addYears(today, -100)));
      });
      test('"endMonth" should be equal the last day of the year', () => {
        const [, navEndMonth] = getNavMonths(props, defaultDateLib);
        expect(navEndMonth).toEqual(new Date(toYear, 11, 31));
      });
    });
  },
);

describe('when "captionLayout" is "dropdown-months"', () => {
  const today = new Date(2024, 4, 3);
  const props: DayPickerProps = {
    captionLayout: "dropdown-months",
    today,
  };
  test('"startMonth" should be undefined', () => {
    const [navStartMonth] = getNavMonths(props, defaultDateLib);
    expect(navStartMonth).toBeUndefined();
  });
  test('"endMonth" should be undefined', () => {
    const [, navEndMonth] = getNavMonths(props, defaultDateLib);
    expect(navEndMonth).toBeUndefined();
  });

  describe('when "startMonth" is set', () => {
    const today = new Date(2024, 4, 3);
    const startMonth = new Date(2021, 4, 3);
    const props: DayPickerProps = {
      captionLayout: "dropdown-months",
      startMonth,
      today,
    };
    test('"startMonth" should be the start of that month', () => {
      const [navStartMonth] = getNavMonths(props, defaultDateLib);
      const startOfThatMonth = startOfMonth(startMonth);
      expect(navStartMonth).toEqual(startOfThatMonth);
    });
    test('"endMonth" should be undefined', () => {
      const [, navEndMonth] = getNavMonths(props, defaultDateLib);
      expect(navEndMonth).toBeUndefined();
    });
  });

  describe('when "endMonth" is set', () => {
    const today = new Date(2021, 4, 3);
    const endMonth = new Date(2022, 4, 3);
    const props: DayPickerProps = {
      captionLayout: "dropdown-months",
      endMonth,
      today,
    };
    test('"startMonth" should be undefined', () => {
      const [navStartMonth] = getNavMonths(props, defaultDateLib);
      expect(navStartMonth).toBeUndefined();
    });
    test('"endMonth" should be the end of that month', () => {
      const [, navEndMonth] = getNavMonths(props, defaultDateLib);
      const endOfThatMonth = startOfDay(endOfMonth(endMonth));
      expect(navEndMonth).toEqual(endOfThatMonth);
    });
  });

  describe('when "fromYear" is set', () => {
    const today = new Date(2024, 4, 3);
    const fromYear = 2022;
    const props: DayPickerProps = {
      captionLayout: "dropdown-months",
      fromYear,
      today,
    };
    test('"startMonth" should be equal to the start of that year', () => {
      const [navStartMonth] = getNavMonths(props, defaultDateLib);
      const startOfThatYear = new Date(fromYear, 0, 1);
      expect(navStartMonth).toEqual(startOfThatYear);
    });
    test('"endMonth" should be undefined', () => {
      const [, navEndMonth] = getNavMonths(props, defaultDateLib);
      expect(navEndMonth).toBeUndefined();
    });
  });

  describe('when "toYear" is set', () => {
    const today = new Date(2021, 4, 3);
    const toYear = 2022;
    const props: DayPickerProps = {
      captionLayout: "dropdown-months",
      toYear,
      today,
    };
    test('"startMonth" should be undefined', () => {
      const [navStartMonth] = getNavMonths(props, defaultDateLib);
      expect(navStartMonth).toBeUndefined();
    });
    test('"endMonth" should be equal to the end of that year', () => {
      const [, navEndMonth] = getNavMonths(props, defaultDateLib);
      const endOfThatYear = new Date(2022, 11, 31);
      expect(navEndMonth).toEqual(endOfThatYear);
    });
  });
});
