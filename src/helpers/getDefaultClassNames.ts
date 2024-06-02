import {
  UI,
  DayModifier,
  CalendarFlag,
  ChevronFlag,
  WeekNumberFlag
} from "../UI";
import type { ClassNames } from "../types";

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

  for (const key in CalendarFlag) {
    classNames[CalendarFlag[key as keyof typeof CalendarFlag]] =
      `rdp-${CalendarFlag[key as keyof typeof CalendarFlag]}`;
  }

  for (const key in ChevronFlag) {
    classNames[ChevronFlag[key as keyof typeof ChevronFlag]] =
      `rdp-${ChevronFlag[key as keyof typeof ChevronFlag]}`;
  }

  for (const key in WeekNumberFlag) {
    classNames[WeekNumberFlag[key as keyof typeof WeekNumberFlag]] =
      `rdp-${WeekNumberFlag[key as keyof typeof WeekNumberFlag]}`;
  }

  for (const key in DayModifier) {
    classNames[DayModifier[key as keyof typeof DayModifier]] =
      `rdp-${DayModifier[key as keyof typeof DayModifier]}`;
  }

  return classNames as Required<ClassNames>;
}
