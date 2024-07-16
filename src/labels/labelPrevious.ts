import type { LabelOptions } from "../lib/dateLib.js";

/**
 * The ARIA label for previous month button.
 *
 * @defaultValue `"Go to the Previous Month"`
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
