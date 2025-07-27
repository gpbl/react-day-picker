import type { ClassNames } from "../types/index.js";
import { Animation, DayFlag, SelectionState, UI } from "../UI.js";

/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */
export function getDefaultClassNames(): ClassNames {
  const classNames: Partial<Required<ClassNames>> = {};

  for (const key in UI) {
    classNames[UI[key as keyof typeof UI]] =
      `rdp-${UI[key as keyof typeof UI]}`;
  }

  for (const key in DayFlag) {
    classNames[DayFlag[key as keyof typeof DayFlag]] =
      `rdp-${DayFlag[key as keyof typeof DayFlag]}`;
  }

  for (const key in SelectionState) {
    classNames[SelectionState[key as keyof typeof SelectionState]] =
      `rdp-${SelectionState[key as keyof typeof SelectionState]}`;
  }

  for (const key in Animation) {
    classNames[Animation[key as keyof typeof Animation]] =
      `rdp-${Animation[key as keyof typeof Animation]}`;
  }

  return classNames as Required<ClassNames>;
}
