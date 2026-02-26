import * as defaultFormatters from "../formatters";

import { getFormatters } from "./getFormatters";

const customFormattersMock = {
  formatCaption: jest.fn(() => "custom caption"),
  formatYearDropdown: jest.fn(() => "custom year"),
};

test("returns default formatters when custom formatters are not provided", () => {
  const formatters = getFormatters(undefined);
  expect(formatters).toEqual(defaultFormatters);
});

test("merges custom formatters with default formatters", () => {
  const formatters = getFormatters(customFormattersMock);
  expect(formatters).toEqual(expect.objectContaining(customFormattersMock));
});
