import { DayFlag } from "../UI.js";
import { CalendarDay } from "../classes/index.js";
import type { Modifiers } from "../types/index.js";

import { calculateFocusTarget } from "./calculateFocusTarget";

const todayModifiers = {
  [DayFlag.today]: true
};

const todayHiddenModifiers = {
  [DayFlag.today]: true,
  [DayFlag.hidden]: true
};

const focusedModifiers = {
  [DayFlag.focused]: true
};

const focusedDisabledModifiers = {
  [DayFlag.focused]: true,
  [DayFlag.disabled]: true
};

const outsideModifiers = {
  [DayFlag.outside]: true
};

const hiddenModifiers = {
  [DayFlag.hidden]: true
};

const disabledModifiers = {
  [DayFlag.disabled]: true
};

const month = new Date(2021, 0, 1);
const day1 = new CalendarDay(new Date(2021, 0, 1), month);
const dayToday = new CalendarDay(new Date(2021, 0, 2), month);
const daySelected = new CalendarDay(new Date(2021, 0, 3), month);
const dayLastFocused = new CalendarDay(new Date(2021, 0, 4), month);
const dayFocusedModifier = new CalendarDay(new Date(2021, 0, 5), month);
const day6 = new CalendarDay(new Date(2021, 0, 6), month);

const days: CalendarDay[] = [
  day1,
  dayToday,
  daySelected,
  dayLastFocused,
  dayFocusedModifier,
  day6
];

const isSelected = (date: Date) => {
  return date.getTime() === daySelected.date.getTime();
};

function getModifiersFactory(
  entries: [CalendarDay, Modifiers][]
): (day: CalendarDay) => Modifiers {
  const map = new Map(entries);
  return (day) => map.get(day) ?? {};
}

describe("calculateFocusTarget", () => {
  describe("should return the correct focus target in the list of days based on the priority", () => {
    it("focused modifier", () => {
      const getModifiers = getModifiersFactory([
        [day1, outsideModifiers],
        [dayToday, todayModifiers],
        [daySelected, {}],
        [dayLastFocused, {}],
        [dayFocusedModifier, focusedModifiers],
        [day6, {}]
      ]);

      const focusTarget = calculateFocusTarget(
        days,
        getModifiers,
        isSelected,
        dayLastFocused
      );

      expect(focusTarget).toBe(dayFocusedModifier);
    });

    it("last focused", () => {
      const getModifiers = getModifiersFactory([
        [day1, outsideModifiers],
        [dayToday, todayModifiers],
        [daySelected, {}],
        [dayLastFocused, {}],
        [dayFocusedModifier, focusedDisabledModifiers],
        [day6, {}]
      ]);

      const focusTarget = calculateFocusTarget(
        days,
        getModifiers,
        isSelected,
        dayLastFocused
      );

      expect(focusTarget).toBe(dayLastFocused);
    });

    it("selected", () => {
      const getModifiers = getModifiersFactory([
        [day1, outsideModifiers],
        [dayToday, todayModifiers],
        [daySelected, {}],
        [dayLastFocused, disabledModifiers],
        [dayFocusedModifier, focusedDisabledModifiers],
        [day6, {}]
      ]);

      const focusTarget = calculateFocusTarget(
        days,
        getModifiers,
        isSelected,
        dayLastFocused
      );

      expect(focusTarget).toBe(daySelected);
    });

    it("today", () => {
      const getModifiers = getModifiersFactory([
        [day1, outsideModifiers],
        [dayToday, todayModifiers],
        [daySelected, hiddenModifiers],
        [dayLastFocused, disabledModifiers],
        [dayFocusedModifier, focusedDisabledModifiers],
        [day6, {}]
      ]);

      const focusTarget = calculateFocusTarget(
        days,
        getModifiers,
        isSelected,
        dayLastFocused
      );

      expect(focusTarget).toBe(dayToday);
    });

    it("first focusable day", () => {
      const getModifiers = getModifiersFactory([
        [day1, outsideModifiers],
        [dayToday, todayHiddenModifiers],
        [daySelected, hiddenModifiers],
        [dayLastFocused, disabledModifiers],
        [dayFocusedModifier, focusedDisabledModifiers],
        [day6, {}]
      ]);

      const focusTarget = calculateFocusTarget(
        days,
        getModifiers,
        isSelected,
        dayLastFocused
      );

      expect(focusTarget).toBe(day6);
    });
  });
});
