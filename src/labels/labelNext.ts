import type { LabelOptions } from "../lib/dateLib.js";

/**
 * Return the default ARIA label for next month button.
 *
 * @group Labels
 */
export function labelNext(
  /** Undefined where there's no next month no navigate to. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  month: Date | undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: LabelOptions
) {
  return "Next Month";
}
