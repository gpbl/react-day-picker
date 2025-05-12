import { DayFlag } from "../UI.js";
import type { CalendarDay } from "../classes/index.js";
import type { Modifiers } from "../types/index.js";

enum FocusTargetPriority {
  Today = 0,
  Selected,
  LastFocused,
  FocusedModifier
}

/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */
function isFocusableDay(modifiers: Modifiers) {
  return (
    !modifiers[DayFlag.disabled] &&
    !modifiers[DayFlag.hidden] &&
    !modifiers[DayFlag.outside]
  );
}

/**
 * Calculates the focus target day based on priority.
 *
 * This function determines the day that should receive focus in the calendar,
 * prioritizing days with specific modifiers (e.g., "focused", "today") or
 * selection states.
 *
 * @param days The array of `CalendarDay` objects to evaluate.
 * @param getModifiers A function to retrieve the modifiers for a given day.
 * @param isSelected A function to determine if a day is selected.
 * @param lastFocused The last focused day, if any.
 * @returns The `CalendarDay` that should receive focus, or `undefined` if no
 *   focusable day is found.
 */
export function calculateFocusTarget(
  days: CalendarDay[],
  getModifiers: (day: CalendarDay) => Modifiers,
  isSelected: (date: Date) => boolean,
  lastFocused: CalendarDay | undefined
): CalendarDay | undefined {
  let focusTarget: CalendarDay | undefined;

  let foundFocusTargetPriority: FocusTargetPriority | -1 = -1;
  for (const day of days) {
    const modifiers = getModifiers(day);

    if (isFocusableDay(modifiers)) {
      if (
        modifiers[DayFlag.focused] &&
        foundFocusTargetPriority < FocusTargetPriority.FocusedModifier
      ) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.FocusedModifier;
      } else if (
        lastFocused?.isEqualTo(day) &&
        foundFocusTargetPriority < FocusTargetPriority.LastFocused
      ) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.LastFocused;
      } else if (
        isSelected(day.date) &&
        foundFocusTargetPriority < FocusTargetPriority.Selected
      ) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.Selected;
      } else if (
        modifiers[DayFlag.today] &&
        foundFocusTargetPriority < FocusTargetPriority.Today
      ) {
        focusTarget = day;
        foundFocusTargetPriority = FocusTargetPriority.Today;
      }
    }
  }

  if (!focusTarget) {
    // Return the first day that is focusable
    focusTarget = days.find((day) => isFocusableDay(getModifiers(day)));
  }
  return focusTarget;
}
