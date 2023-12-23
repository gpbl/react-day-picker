import { type FormatOptions, format } from 'date-fns';

import type { Modifiers } from '../types/modifiers';

/** Return the default ARIA label for the day button. */
export function labelDay(
  date: Date,
  _modifiers: Modifiers,
  options: FormatOptions
) {
  return format(date, 'do MMMM (EEEE)', options);
}
