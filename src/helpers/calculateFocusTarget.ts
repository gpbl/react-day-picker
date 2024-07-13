import { DayFlag } from "../UI.js";
import type { CalendarDay } from "../classes/index.js";
import type { Modifiers } from "../types/index.js";
import { UseCalendar } from "../useCalendar.js";

export function calculateFocusTarget(
  calendar: UseCalendar,
  getModifiers: (day: CalendarDay) => Modifiers,
  isSelected: (date: Date) => boolean,
  lastFocused: CalendarDay | undefined
) {
  let focusTarget: CalendarDay | undefined;

  let index = 0;
  let found = false;

  while (index < calendar.days.length && !found) {
    const day = calendar.days[index];
    const m = getModifiers(day);

    if (!m[DayFlag.disabled] && !m[DayFlag.hidden] && !m[DayFlag.outside]) {
      if (m[DayFlag.focused]) {
        focusTarget = day;
        found = true;
      } else if (lastFocused?.isEqualTo(day)) {
        focusTarget = day;
        found = true;
      } else if (isSelected(day.date)) {
        focusTarget = day;
        found = true;
      } else if (m[DayFlag.today]) {
        focusTarget = day;
        found = true;
      }
    }

    index++;
  }

  if (!focusTarget) {
    // return the first day that is focusable
    focusTarget = calendar.days.find((day) => {
      const m = getModifiers(day);
      return !m[DayFlag.disabled] && !m[DayFlag.hidden] && !m[DayFlag.outside];
    });
  }
  return focusTarget;
}
