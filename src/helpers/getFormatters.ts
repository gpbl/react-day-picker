import * as defaultFormatters from "../formatters/index.js";
import type { DayPickerProps } from "../types/index.js";

/** Return the formatters from the props merged with the default formatters. */
export function getFormatters(customFormatters: DayPickerProps["formatters"]) {
  if (customFormatters?.formatMonthCaption && !customFormatters.formatCaption) {
    customFormatters.formatCaption = customFormatters.formatMonthCaption;
  }
  if (
    customFormatters?.formatYearCaption &&
    !customFormatters.formatYearDropdown
  ) {
    customFormatters.formatYearDropdown = customFormatters.formatYearCaption;
  }
  return {
    ...defaultFormatters,
    ...customFormatters
  };
}
