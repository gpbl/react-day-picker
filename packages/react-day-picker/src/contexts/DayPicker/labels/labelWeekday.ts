import { format } from 'date-fns';

import { WeekdayLabel } from '../../../types';

/**
 * The default ARIA label for the Weekday element.
 */
export const labelWeekday: WeekdayLabel = (day, options): string => {
  return format(day, 'cccc.', options);
};
