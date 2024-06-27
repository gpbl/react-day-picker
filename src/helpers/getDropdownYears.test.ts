import { enUS as locale } from "date-fns/locale";
import { dateLib } from "react-day-picker/index";

import { getDropdownYears } from "./getDropdownYears";
import { getFormatters } from "./getFormatters";

test("return undefined if startMonth or endMonth is not provided", () => {
  const displayMonth = new Date(2022, 0, 1); // January 2022
  const formatters = getFormatters({
    formatYearDropdown: (year: number) => `${year}`
  });
  const result1 = getDropdownYears(displayMonth, {
    formatters,
    locale,
    startMonth: undefined,
    endMonth: new Date(2022, 11, 31),
    dateLib
  });
  const result2 = getDropdownYears(displayMonth, {
    formatters,
    locale,
    startMonth: new Date(2022, 0, 1),
    endMonth: undefined,
    dateLib
  });

  expect(result1).toBeUndefined();
  expect(result2).toBeUndefined();
});

test("return correct dropdown options", () => {
  const displayMonth = new Date(2022, 0, 1); // January 2022
  const startMonth = new Date(2022, 0, 1); // January 2022
  const endMonth = new Date(2024, 11, 31); // December 2024
  const formatters = getFormatters({
    formatYearDropdown: (year: number) => `${year}`
  });

  const result = getDropdownYears(displayMonth, {
    formatters,
    locale,
    startMonth,
    endMonth,
    dateLib
  });

  expect(result).toEqual([
    { value: 2022, label: "2022", disabled: false },
    { value: 2023, label: "2023", disabled: false },
    { value: 2024, label: "2024", disabled: false }
  ]);
});
