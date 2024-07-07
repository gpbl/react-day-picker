import type { DateLib } from "../index.js";
import type { LabelOptions } from "../lib/dateLib.js";
import { dateLib as defaultDateLib } from "../lib/index.js";
import type { Modifiers } from "../types/index.js";

/**
 * Return an ARIA label for the day button.
 *
 * @group Labels
 */
export function labelDayButton(
  date: Date,
  modifiers: Modifiers,
  options?: LabelOptions,
  dateLib: DateLib = defaultDateLib
) {
  let label = dateLib.format(date, "PPPP", options);
  if (modifiers.today) {
    label = `Today, ${label}`;
  }
  if (modifiers.selected) {
    label = `${label}, selected`;
  }
  return label;
}

/** @deprecated Use `labelDayButton` instead. */
export const labelDay = labelDayButton;
