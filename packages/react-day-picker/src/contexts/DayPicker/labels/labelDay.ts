import { format } from 'date-fns';

import { DayLabel } from '../../../types';

/**
 * The default ARIA label for the day button.
 */
export const labelDay: DayLabel = (day, modifiers, options): string => {
  return format(day, 'do MMMM (EEEE)', options);
};
