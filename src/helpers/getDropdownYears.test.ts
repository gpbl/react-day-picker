import { formatYearDropdown } from "../formatters";

import { getDropdownYears } from "./getDropdownYears";

it("returns undefined if fromDate is not defined", () => {
  const result = getDropdownYears({
    toDate: new Date(),
    fromDate: undefined,
    formatters: { formatYearDropdown }
  });
  expect(result).toBeUndefined();
});

it("returns undefined if `toDate` is not defined", () => {
  const result = getDropdownYears({
    fromDate: new Date(),
    toDate: undefined,
    formatters: { formatYearDropdown }
  });
  expect(result).toBeUndefined();
});

it("returns an array of years between `fromDate` and `toDate`", () => {
  const fromDate = new Date(2020, 0, 1);
  const toDate = new Date(2022, 11, 31);
  const result = getDropdownYears({
    fromDate,
    toDate,
    formatters: {
      formatYearDropdown: (year: number): string =>
        `Formatted ${year.toString()}`
    }
  });

  expect(result).toEqual([
    [2020, "Formatted 2020"],
    [2021, "Formatted 2021"],
    [2022, "Formatted 2022"]
  ]);
});

it("handles same year for fromDate and toDate", () => {
  const year = new Date(2021, 5, 15);
  const result = getDropdownYears({
    fromDate: year,
    toDate: year,
    formatters: {
      formatYearDropdown: (year: number): string =>
        `Formatted ${year.toString()}`
    }
  });

  expect(result).toEqual([[2021, "Formatted 2021"]]);
});
