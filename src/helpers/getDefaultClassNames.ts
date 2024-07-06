import { UI, DayFlag, RootFlag, ChevronFlag, SelectionState } from "../UI.js";
import type { ClassNames } from "../types/index.js";

/**
 * Get the default class names for the UI elements.
 *
 * @group Utilities
 */
export function getDefaultClassNames(): Required<ClassNames> {
  const classNames: Partial<Required<ClassNames>> = {};

  for (const key in UI) {
    classNames[UI[key as keyof typeof UI]] =
      `rdp-${UI[key as keyof typeof UI]}`;
  }

  for (const key in RootFlag) {
    classNames[RootFlag[key as keyof typeof RootFlag]] =
      `rdp-${RootFlag[key as keyof typeof RootFlag]}`;
  }

  for (const key in ChevronFlag) {
    classNames[ChevronFlag[key as keyof typeof ChevronFlag]] =
      `rdp-${ChevronFlag[key as keyof typeof ChevronFlag]}`;
  }

  for (const key in DayFlag) {
    classNames[DayFlag[key as keyof typeof DayFlag]] =
      `rdp-${DayFlag[key as keyof typeof DayFlag]}`;
  }

  for (const key in SelectionState) {
    classNames[SelectionState[key as keyof typeof SelectionState]] =
      `rdp-${SelectionState[key as keyof typeof SelectionState]}`;
  }

  return classNames as Required<ClassNames>;
}
