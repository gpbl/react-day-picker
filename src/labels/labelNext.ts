import type { LabelOptions } from "../lib/dateLib.js";

/**
 * The ARIA label for next month button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @group Labels
 * @see http://daypicker.dev/next/docs/translation#aria-labels
 */
export function labelNext(
  /** Undefined where there's no next month no navigate to. */
  month: Date | undefined,
  options?: LabelOptions
) {
  return "Go to the Next Month";
}
