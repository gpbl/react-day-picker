import { formatYearDropdown } from "../formatters";

import { getDropdownYears } from "./getDropdownYears";

it("returns undefined if fromMonth is not defined", () => {
  const result = getDropdownYears({
    toMonth: new Date(),
    fromMonth: undefined,
    formatters: { formatYearDropdown }
  });
  expect(result).toBeUndefined();
});

it("returns undefined if `toMonth` is not defined", () => {
  const result = getDropdownYears({
    fromMonth: new Date(),
    toMonth: undefined,
    formatters: { formatYearDropdown }
  });
  expect(result).toBeUndefined();
});

it("returns an array of years between `fromMonth` and `toMonth`", () => {
  const fromMonth = new Date(2020, 0, 1);
  const toMonth = new Date(2022, 11, 31);
  const result = getDropdownYears({
    fromMonth,
    toMonth,
    formatters: {
      formatYearDropdown: (year: number): string =>
        `Formatted ${year.toString()}`
    }
  });

  expect(result).toEqual([
    {
      disabled: false,
      label: "Formatted 2020",
      value: 2020
    },
    {
      disabled: false,
      label: "Formatted 2021",
      value: 2021
    },
    {
      disabled: false,
      label: "Formatted 2022",
      value: 2022
    }
  ]);
});

it("handles same year for fromMonth and toMonth", () => {
  const year = new Date(2021, 5, 15);
  const result = getDropdownYears({
    fromMonth: year,
    toMonth: year,
    formatters: {
      formatYearDropdown: (year: number): string =>
        `Formatted ${year.toString()}`
    }
  });

  expect(result).toEqual([
    {
      disabled: false,
      label: "Formatted 2021",
      value: 2021
    }
  ]);
});
