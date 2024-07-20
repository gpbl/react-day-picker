import type { LabelOptions } from "../lib/dateLib.js";

/**
 * The ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelWeekNumberHeader(options?: LabelOptions): string {
  return "Week Number";
}
