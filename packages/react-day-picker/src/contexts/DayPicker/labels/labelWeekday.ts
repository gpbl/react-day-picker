import { format } from 'date-fns';

import { WeekdayLabelFormatter } from 'types';

/**
 * The default ARIA label for the Weekday element.
 */
export const labelWeekday: WeekdayLabelFormatter = (day, options): string => {
  return format(day, 'cccc.', options);
};
