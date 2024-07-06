import type { DateLib } from "../index.js";
import type { LabelOptions } from "../lib/dateLib.js";
import { dateLib as defaultDateLib } from "../lib/index.js";
import type { Modifiers } from "../types/index.js";

/**
 * Return an ARIA label for the day button.
 *
 * @group Labels
 */
export function labelGridcell(
  date: Date,
  modifiers?: Modifiers,
  options?: LabelOptions,
  dateLib: DateLib = defaultDateLib
) {
  let label = dateLib.format(date, "PPPP", options);
  if (modifiers?.today) {
    label = `Today, ${label}`;
  }
  return label;
}
