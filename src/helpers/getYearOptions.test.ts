import { DateLib, defaultDateLib } from "../classes/DateLib";
import { formatYearDropdown } from "../formatters/formatYearDropdown";

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
  const startMonth = new Date(1930, 6, 15);
  const endMonth = new Date(1940, 6, 15);

  // Use the Asia/Tehran time zone because it has a non-hour offset (UTC+3:30)
  const dateLib = new DateLib({ timeZone: "Asia/Tehran" });

  const result = getYearOptions(
    startMonth,
    endMonth,
    {
      formatYearDropdown,
    },
    dateLib,
  );
  expect(result).toEqual([
    { value: 1930, label: "1930", disabled: false },
    { value: 1931, label: "1931", disabled: false },
    { value: 1932, label: "1932", disabled: false },
    { value: 1933, label: "1933", disabled: false },
    { value: 1934, label: "1934", disabled: false },
    { value: 1935, label: "1935", disabled: false },
    { value: 1936, label: "1936", disabled: false },
    { value: 1937, label: "1937", disabled: false },
    { value: 1938, label: "1938", disabled: false },
    { value: 1939, label: "1939", disabled: false },
    { value: 1940, label: "1940", disabled: false },
  ]);
});
