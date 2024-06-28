import type { DateLib } from "../index.js";
import type { FormatOptions } from "../lib/dateLib.js";
import { dateLib as defaultDateLib } from "../lib/index.js";

/**
 * Return an ARIA label for the month caption. The label is used in an aria-live
 * region and will be announced wnen the month changes. from the caption.
 *
 * @group Labels
 */
export function labelCaption(
  date: Date,
  options?: FormatOptions,
  dateLib: DateLib = defaultDateLib
) {
  return "";
}
