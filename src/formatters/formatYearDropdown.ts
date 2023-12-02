/** The default formatter for the Year caption. */
export function formatYearDropdown(year: number): string {
  return year.toString();
}

/** @deprecated Use `formatYearDropdown` instead. */
export const formatYearCaption = formatYearDropdown;
