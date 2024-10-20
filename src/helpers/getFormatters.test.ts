import * as defaultFormatters from "../formatters";
import { dateLib } from "../lib/dateLib";

import { getFormatters } from "./getFormatters";

const customFormattersMock = {
  formatMonthCaption: jest.fn(),
  formatYearCaption: jest.fn()
};

test("returns default formatters when custom formatters are not provided", () => {
  const formatters = getFormatters(undefined);
  expect(formatters).toEqual(defaultFormatters);
});

test("merges custom formatters with default formatters", () => {
  const formatters = getFormatters(customFormattersMock);
  expect(formatters).toEqual(expect.objectContaining(customFormattersMock));
});

test("assigns `formatMonthCaption` to `formatCaption` if `formatCaption` is not defined", () => {
  const result = getFormatters({ formatMonthCaption: () => "customMonth" });
  expect(result.formatCaption(new Date(), {}, dateLib)).toBe("customMonth");
  expect(result.formatMonthCaption(new Date(), {}, dateLib)).toBe(
    "customMonth"
  );
});

test("does not overwrite `formatCaption` if already defined", () => {
  const result = getFormatters({
    formatMonthCaption: () => "customMonth",
    formatCaption: () => "customCaption"
  });
  expect(result.formatCaption(new Date(), {}, dateLib)).toBe("customCaption");
  expect(result.formatMonthCaption(new Date(), {}, dateLib)).toBe(
    "customMonth"
  );
});

test("assigns `formatYearCaption` to `formatYearDropdown` if `formatYearDropdown` is not defined", () => {
  const result = getFormatters({ formatYearCaption: () => "customYear" });
  expect(result.formatYearDropdown(new Date(0).getFullYear())).toBe(
    "customYear"
  );
  expect(result.formatYearCaption(new Date(0).getFullYear())).toBe(
    "customYear"
  );
});

test("does not overwrite `formatYearDropdown` if already defined", () => {
  const result = getFormatters({
    formatYearCaption: () => "customYear",
    formatYearDropdown: () => "customDropdown"
  });
  expect(result.formatYearDropdown(new Date().getFullYear())).toBe(
    "customDropdown"
  );
  expect(result.formatYearCaption(new Date().getFullYear())).toBe("customYear");
});
