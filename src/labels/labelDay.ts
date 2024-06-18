import { format } from "date-fns/format";

import type { Modifiers } from "../types";

/**
 * Return an ARIA label for the day button. By default, it returns an empty
 * label since the screen readers will announce the date from the grid cell.
 *
 * Use this function to provide a custom label for the day gridcell, e.g. for
 * announcing that is selected or booked.
 *
 * @group Labels
 */
export function labelDay(
  date: Date,
  modifiers: Modifiers,
  options: Parameters<typeof format>[2]
) {
  return "";
}
