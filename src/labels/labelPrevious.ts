import type { FormatOptions } from "../lib/dateLib.js";

/**
 * Return the default ARIA label for next month button.
 *
 * @group Labels
 */
export function labelPrevious(
  /** Undefined where there's no previous month no navigate to. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  month: Date | undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: FormatOptions
) {
  return "Previous Month";
}
