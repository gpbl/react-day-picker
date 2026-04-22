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
    expect(navStartMonth).toEqual(startOfMonth(startMonth));
  });
});

describe('when "endMonth" is set', () => {
  const endMonth = new Date(2021, 4, 3);
  const props: DayPickerProps = { endMonth };

  test('"endMonth" should be the end of that month', () => {
    const [, navEndMonth] = getNavMonths(props, defaultDateLib);
    expect(navEndMonth).toEqual(startOfDay(endOfMonth(endMonth)));
  });
});

describe.each([
  ["dropdown" as const],
  ["dropdown-years" as const],
])('when "captionLayout" is "%s"', (captionLayout) => {
  const today = new Date(2024, 4, 3);
  const props: DayPickerProps = { captionLayout, today };

  test('"startMonth" should be 100 years ago', () => {
    const [navStartMonth] = getNavMonths(props, defaultDateLib);
    expect(navStartMonth).toEqual(startOfYear(addYears(today, -100)));
  });

  test('"endMonth" should be the end of this year', () => {
    const [, navEndMonth] = getNavMonths(props, defaultDateLib);
    expect(navEndMonth).toEqual(startOfDay(endOfYear(today)));
  });

  describe('when "startMonth" is set', () => {
    const customStartMonth = new Date(2021, 4, 3);
    const startProps: DayPickerProps = {
      captionLayout,
      startMonth: customStartMonth,
      today,
    };

    test('"startMonth" should be the start of that month', () => {
      const [navStartMonth] = getNavMonths(startProps, defaultDateLib);
      expect(navStartMonth).toEqual(startOfMonth(customStartMonth));
    });
  });

  describe('when "endMonth" is set', () => {
    const customEndMonth = new Date(2022, 4, 3);
    const endProps: DayPickerProps = {
      captionLayout,
      endMonth: customEndMonth,
      today,
    };

    test('"endMonth" should be the end of that month', () => {
      const [, navEndMonth] = getNavMonths(endProps, defaultDateLib);
      expect(navEndMonth).toEqual(startOfDay(endOfMonth(customEndMonth)));
    });
  });
});

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
});
