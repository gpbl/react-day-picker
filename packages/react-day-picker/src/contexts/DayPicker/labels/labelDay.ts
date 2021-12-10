import { format } from 'date-fns';

import { DayLabel } from 'types/Labels';

/**
 * The default ARIA label for the day button.
 */
export const labelDay: DayLabel = (day, modifers, options): string => {
  return format(day, 'do MMMM (EEEE)', options);
};
