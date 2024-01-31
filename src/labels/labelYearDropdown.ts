import type { format } from 'date-fns/format';

/**
 * The default ARIA label for the years dropdown.
 *
 * @category Labels
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function labelYearDropdown(options?: Parameters<typeof format>[2]) {
  return 'Year: ';
}
