import type { DateLib } from "../";
import { dateLib as defaultDateLib } from "../lib";
import type { FormatOptions } from "../lib/dateLib";

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
