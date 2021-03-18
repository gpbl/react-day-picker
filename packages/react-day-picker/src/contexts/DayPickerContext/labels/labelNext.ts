import { format } from 'date-fns';

import { NavButtonLabelFormatter } from 'types';

/**
 * The default ARIA label for next month button in navigation
 */
export const labelNext: NavButtonLabelFormatter = (month, options): string => {
  if (!month) return 'Next Month';
  return format(month, 'LLLL Y', options);
};
