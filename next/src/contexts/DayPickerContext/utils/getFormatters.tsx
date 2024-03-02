import * as defaultFormatters from "../../../formatters";
import type { PropsBase } from "../../../types/props";

/** Return the formatters from the props. */
export function getFormatters(customFormatters: PropsBase["formatters"]) {
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
    ...customFormatters,
  };
}
