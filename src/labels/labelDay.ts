import { format } from 'date-fns';

import { FormatOptions } from '../types/FormatOptions';
import { Modifiers } from '../types/modifiers';

/** Return the default ARIA label for the day button. */
export function labelDay(
  date: Date,
  modifiers: Modifiers,
  options: FormatOptions
) {
  return format(date, 'do MMMM (EEEE)', options);
}
