/**
 * Format the years for the dropdown option label.
 *
 * @defaultValue `year.toString()`
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
export function formatYearDropdown(year: number): string {
  return year.toString();
}

/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */
export const formatYearCaption = formatYearDropdown;
