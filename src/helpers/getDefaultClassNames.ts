import { UI, DayFlag, SelectionState, AnimationClass } from "../UI.js";
import type { ClassNames } from "../types/index.js";

/**
 * Get the default class names for the UI elements.
 *
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

  for (const key in AnimationClass) {
    classNames[AnimationClass[key as keyof typeof AnimationClass]] =
      `rdp-${AnimationClass[key as keyof typeof AnimationClass]}`;
  }

  return classNames as Required<ClassNames>;
}
