import format from 'date-fns/format';

import { WeekdayLabel } from 'types/Labels';

/**
 * The default ARIA label for the Weekday element.
 */
export const labelWeekday: WeekdayLabel = (day, options): string => {
  return format(day, 'cccc', options);
};
