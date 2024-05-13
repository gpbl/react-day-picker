import { format } from "date-fns";

import { ActiveModifiers } from "../../../types/Modifiers";

/** Return the default ARIA label for the day button. */
export function labelDay(
  date: Date,
  activeModifiers: ActiveModifiers,
  options: Parameters<typeof format>[2]
) {
  return format(date, "do MMMM (EEEE)", options);
}
