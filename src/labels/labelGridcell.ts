import { DateLib, type LabelOptions } from "../lib/dateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * The label for the day gridcell when the calendar is not interactive.
 *
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelGridcell(
  date: Date,
  /** The modifiers for the day. */
  modifiers?: Modifiers,
  options?: LabelOptions,
  /** @ignore */
  dateLib: DateLib = DateLib.fromOptionsDefaultLocale(options)
) {
  let label = dateLib.format(date, "PPPP");
  if (modifiers?.today) {
    label = `Today, ${label}`;
  }
  return label;
}
