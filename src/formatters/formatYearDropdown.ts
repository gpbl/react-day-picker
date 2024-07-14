/**
 * The default formatter for the Year dropdown option. As default, it returns
 * the year.
 *
 * @group Formatters
 * @see https://daypicker.dev/next/docs/translation#custom-formatters
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
