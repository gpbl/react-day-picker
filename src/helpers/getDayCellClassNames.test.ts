import { DayFlag, SelectionState } from "../UI.js";
import type { ModifiersClassNames, ClassNames } from "../types/index.js";

import { getDayCellClassNames } from "./getDayCellClassNames.js";
import { getDefaultClassNames } from "./getDefaultClassNames.js";

describe("getDayCellClassNames", () => {
  const baseClass = "day";
  const classNames: ClassNames = {
    ...getDefaultClassNames(),
    [DayFlag.disabled]: "disabled",
    [SelectionState.selected]: "selected-style"
  };
  const modifiersClassNames: ModifiersClassNames = {
    today: "today-class",
    weekend: "weekend-class"
  };

  it("should return base class when no modifiers are active", () => {
    const modifiers = { today: false, weekend: false };
    const result = getDayCellClassNames(
      modifiers,
      classNames,
      modifiersClassNames
    );
    expect(result).toEqual([baseClass]);
  });

  it("should return class names for active modifiers", () => {
    const modifiers = { today: true, weekend: false };
    const result = getDayCellClassNames(
      modifiers,
      classNames,
      modifiersClassNames
    );
    expect(result).toEqual([baseClass, "today-class"]);
  });

  it("should return class names for active day flags", () => {
    const modifiers = { selected: true };
    const result = getDayCellClassNames(
      modifiers,
      classNames,
      modifiersClassNames
    );
    expect(result).toEqual([baseClass, "selected-style"]);
  });

  it("should return class names for active selection states", () => {
    const modifiers = { selected: true };
    const result = getDayCellClassNames(modifiers, classNames);
    expect(result).toEqual([baseClass, "selected-style"]);
  });

  it("should prioritize modifiersClassNames over classNames", () => {
    const modifiers = { today: true, selected: true };
    const result = getDayCellClassNames(
      modifiers,
      classNames,
      modifiersClassNames
    );
    expect(result).toEqual([baseClass, "today-class", "selected-style"]);
  });
});
