import { formatYearDropdown } from "../formatters";

import { getDropdownYears } from "./getDropdownYears";

it("returns undefined if startMonth is not defined", () => {
  const result = getDropdownYears({
    endMonth: new Date(),
    startMonth: undefined,
    formatters: { formatYearDropdown }
  });
  expect(result).toBeUndefined();
});

it("returns undefined if `endMonth` is not defined", () => {
  const result = getDropdownYears({
    startMonth: new Date(),
    endMonth: undefined,
    formatters: { formatYearDropdown }
  });
  expect(result).toBeUndefined();
});

it("returns an array of years between `startMonth` and `endMonth`", () => {
  const startMonth = new Date(2020, 0, 1);
  const endMonth = new Date(2022, 11, 31);
  const result = getDropdownYears({
    startMonth,
    endMonth,
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

it("handles same year for startMonth and endMonth", () => {
  const year = new Date(2021, 5, 15);
  const result = getDropdownYears({
    startMonth: year,
    endMonth: year,
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
