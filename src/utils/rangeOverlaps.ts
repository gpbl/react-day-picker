import { defaultDateLib } from "../classes/index.js";

import { rangeIncludesDate } from "./rangeIncludesDate.js";

/**
 * Determines whether a given range overlaps with another range.
 *
 * @since 9.2.2
 * @group Utilities
 */
export function rangeOverlaps(
  rangeLeft: { from: Date; to: Date },
  rangeRight: { from: Date; to: Date },
  dateLib = defaultDateLib
): boolean {
  return (
    rangeIncludesDate(rangeLeft, rangeRight.from, false, dateLib) ||
    rangeIncludesDate(rangeLeft, rangeRight.to, false, dateLib) ||
    rangeIncludesDate(rangeRight, rangeLeft.from, false, dateLib) ||
    rangeIncludesDate(rangeRight, rangeLeft.to, false, dateLib)
  );
}
