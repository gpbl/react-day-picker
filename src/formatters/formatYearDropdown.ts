/**
 * The default formatter for the Year caption.
 *
 * @category Formatters
 */
export function formatYearDropdown(year: number): string {
  return year.toString();
}

/**
 * @deprecated Use `formatYearDropdown` instead.
 * @category Formatters
 */
export const formatYearCaption = formatYearDropdown;
