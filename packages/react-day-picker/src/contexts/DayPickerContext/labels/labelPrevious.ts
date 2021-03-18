import { format } from 'date-fns';

import { NavButtonLabelFormatter } from 'types';

/**
 * The default ARIA label for previous month button in navigation
 */
export const labelPrevious: NavButtonLabelFormatter = (
  month,
  options
): string => {
  if (!month) return 'Previous Month';
  return format(month, 'LLLL Y', options);
};
