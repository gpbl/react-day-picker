import { format } from 'date-fns';

import { DayLabelFormatter } from 'types';

/**
 * The default ARIA label for the day button.
 */
export const labelDay: DayLabelFormatter = (day, options): string => {
  return format(day, 'do MMMM (EEEE)', options);
};
