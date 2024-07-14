import type { LabelOptions } from "../lib/dateLib.js";

/**
 * Return the default ARIA label for next month button.
 *
 * @group Labels
 * @see http://daypicker.dev/next/docs/translation#aria-labels
 */
export function labelPrevious(
  /** Undefined where there's no previous month no navigate to. */
  month: Date | undefined,
  options?: LabelOptions
) {
  return "Go to the Previous Month";
}
