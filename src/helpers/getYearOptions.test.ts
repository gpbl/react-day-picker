import { DateLib, defaultDateLib } from "../classes/DateLib";

import { getFormatters } from "./getFormatters";
import { getYearOptions } from "./getYearOptions";

test("return undefined if navStart or navEnd are not set", () => {
  const formatters = getFormatters({
    formatYearDropdown: (date: Date) => `${date.getFullYear()}`,
  });
  const result1 = getYearOptions(
    undefined,
    new Date(2022, 11, 31),
    formatters,
    defaultDateLib,
  );
  const result2 = getYearOptions(
    new Date(2022, 0, 1),
    undefined,
    formatters,
    defaultDateLib,
  );

  expect(result1).toBeUndefined();
  expect(result2).toBeUndefined();
});

test("return correct dropdown options", () => {
  const startMonth = new Date(2022, 0, 1); // January 2022
  const endMonth = new Date(2024, 11, 31); // December 2024
  const formatters = getFormatters({
    formatYearDropdown: (date: Date) => `${date.getFullYear()}`,
  });

  const result = getYearOptions(
    startMonth,
    endMonth,
    formatters,
    defaultDateLib,
  );

  expect(result).toEqual([
    { value: 2022, label: "2022", disabled: false },
    { value: 2023, label: "2023", disabled: false },
    { value: 2024, label: "2024", disabled: false },
  ]);
});

test("return reversed dropdown options when reverse is true", () => {
  const startMonth = new Date(2022, 0, 1); // January 2022
  const endMonth = new Date(2024, 11, 31); // December 2024
  const formatters = getFormatters({
    formatYearDropdown: (date: Date) => `${date.getFullYear()}`,
  });

  const result = getYearOptions(
    startMonth,
    endMonth,
    formatters,
    defaultDateLib,
    true,
  );

  expect(result).toEqual([
    { value: 2024, label: "2024", disabled: false },
    { value: 2023, label: "2023", disabled: false },
    { value: 2022, label: "2022", disabled: false },
  ]);
});

test("uses the configured time zone when building the year range", () => {
  const startMonth = new Date(2022, 6, 15);
  const endMonth = new Date(2024, 6, 15);
  const formatters = getFormatters({
    formatYearDropdown: (date: Date) => `${date.getFullYear()}`,
  });
  const dateLib = new DateLib({ timeZone: "Asia/Tokyo" });

  const result = getYearOptions(startMonth, endMonth, formatters, dateLib);

  expect(result).toEqual([
    { value: 2022, label: "2022", disabled: false },
    { value: 2023, label: "2023", disabled: false },
    { value: 2024, label: "2024", disabled: false },
  ]);
});
