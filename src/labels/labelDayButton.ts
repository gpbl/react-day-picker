import { DateLib, type DateLibOptions } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * The ARIA label for the day button.
 *
 * Use the `modifiers` argument to add additional context to the label, e.g.
 * when a day is selected or is today.
 *
 * @defaultValue The formatted date.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelDayButton(
  date: Date,
  /** The modifiers for the day. */
  modifiers: Modifiers,
  options?: DateLibOptions,
  /** @ignore */
  dateLib: DateLib = new DateLib(options)
) {
  let label = dateLib.format(date, "PPPP");
  if (modifiers.today) label = `Today, ${label}`;
  if (modifiers.selected) label = `${label}, selected`;
  return label;
}

/** @deprecated Use `labelDayButton` instead. */
export const labelDay = labelDayButton;
