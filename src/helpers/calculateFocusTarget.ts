import { DayFlag } from "../UI.js";
import type { CalendarDay } from "../classes/index.js";
import type { Modifiers } from "../types/index.js";

enum FocusTargetPriority {
  Today = 0,
  Selected,
  LastFocused,
  FocusedModifier
}

function isFocusableDay(modifiers: Modifiers) {
  return (
    !modifiers[DayFlag.disabled] &&
    !modifiers[DayFlag.hidden] &&
    !modifiers[DayFlag.outside]
  );
}

export function calculateFocusTarget(
  days: CalendarDay[],
  getModifiers: (day: CalendarDay) => Modifiers,
  isSelected: (date: Date) => boolean,
  lastFocused: CalendarDay | undefined
) {
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
    // return the first day that is focusable
    focusTarget = days.find((day) => isFocusableDay(getModifiers(day)));
  }
  return focusTarget;
}
