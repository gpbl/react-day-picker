import { format } from 'date-fns';

import { Modifiers } from '../types/modifiers';

/** Return the default ARIA label for the day button. */
export function labelDay(
  date: Date,
  modifiers: Modifiers,
  options: Parameters<typeof format>[2]
) {
  return format(date, 'do MMMM (EEEE)', options);
}
