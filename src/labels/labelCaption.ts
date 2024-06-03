import { format } from "date-fns/format";

/**
 * Return an ARIA label for the month caption. The label is used in an aria-live
 * region and will be announced wnen the month changes. from the caption.
 *
 * @group Labels
 */
export function labelCaption(
  date: Date,
  options: Parameters<typeof format>[2]
) {
  return "";
}
