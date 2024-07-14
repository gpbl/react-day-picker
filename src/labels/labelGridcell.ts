import type { DateLib } from "../index.js";
import type { LabelOptions } from "../lib/dateLib.js";
import { dateLib as defaultDateLib } from "../lib/index.js";
import type { Modifiers } from "../types/index.js";

/**
 * The label for the day gridcell when the calendar is not interactive.
 *
 * @group Labels
 * @see http://daypicker.dev/next/docs/translation#aria-labels
 */
export function labelGridcell(
  date: Date,
  /** The modifiers for the day. */
  modifiers?: Modifiers,
  options?: LabelOptions,
  /** @ignore */
  dateLib: DateLib = defaultDateLib
) {
  let label = dateLib.format(date, "PPPP", options);
  if (modifiers?.today) {
    label = `Today, ${label}`;
  }
  return label;
}
