import type { DateLibOptions } from "../classes/DateLib.js";

/**
 * The ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelWeekNumberHeader(options?: DateLibOptions): string {
  return "Week Number";
}
