import { UI, UIDayModifier, UIFlag } from "../UI";
import type { ClassNames } from "../types";

/** Get the default class names for the UI elements. */
export function getDefaultClassNames(): Required<ClassNames> {
  const classNames: Partial<Required<ClassNames>> = {};

  for (const key in UI) {
    classNames[UI[key as keyof typeof UI]] =
      `rdp-${UI[key as keyof typeof UI]}`;
  }

  for (const key in UIFlag) {
    classNames[UIFlag[key as keyof typeof UIFlag]] =
      `rdp-${UIFlag[key as keyof typeof UIFlag]}`;
  }

  for (const key in UIDayModifier) {
    classNames[UIDayModifier[key as keyof typeof UIDayModifier]] =
      `rdp-${UIDayModifier[key as keyof typeof UIDayModifier]}`;
  }

  return classNames as Required<ClassNames>;
}
