import { format } from "date-fns/format";

import type { DayModifiers } from "../types";

/**
 * Return the default ARIA label for the day button.
 *
 * @group Labels
 */
export function labelDay(
  date: Date,
  modifiers: DayModifiers,
  options: Parameters<typeof format>[2]
) {
  return format(date, "do MMMM (EEEE)", options);
}
