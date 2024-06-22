import type { DateLib } from "../";
import type { format } from "../lib/dateLib";
import { dateLib as defaultDateLib } from "../lib/dateLib";

/**
 * Return an ARIA label for the month caption. The label is used in an aria-live
 * region and will be announced wnen the month changes. from the caption.
 *
 * @group Labels
 */
export function labelCaption(
  date: Date,
  options?: Parameters<typeof format>[2],
  dateLib: DateLib = defaultDateLib
) {
  return "";
}
