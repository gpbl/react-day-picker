import type { LabelOptions } from "../lib/dateLib.js";

/**
 * Return the default ARIA label for the week number header element.
 *
 * @group Labels
 * @see http://daypicker.dev/next/docs/translation#aria-labels
 */
export function labelWeekNumberHeader(options?: LabelOptions): string {
  return "Week Number";
}
