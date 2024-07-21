import type { CSSProperties } from "react";

// Update the path as needed
import type { Modifiers, ModifiersStyles } from "../types";

import { getStyleForModifiers } from "./getStyleForModifiers";

const defaultModifiers: Modifiers = {
  disabled: false,
  hidden: false,
  outside: false,
  range_end: false,
  range_middle: false,
  range_start: false,
  selected: false,
  focusable: false,
  focused: false,
  today: false
};

test("applies modifier styles to the base style", () => {
  const dayModifiers: Modifiers = {
    ...defaultModifiers,
    selected: true,
    disabled: false
  };
  const modifiersStyles: Partial<ModifiersStyles> = {
    selected: { backgroundColor: "blue", color: "white" }
  };
  const expectedStyle: CSSProperties = {
    ...modifiersStyles.selected
  };

  const style = getStyleForModifiers(dayModifiers, {}, modifiersStyles);

  expect(style).toEqual(expectedStyle);
});

test("ignores modifiers that are not active", () => {
  const dayModifiers: Modifiers = {
    ...defaultModifiers,
    selected: false,
    disabled: true
  };
  const modifiersStyles: Partial<ModifiersStyles> = {
    disabled: { opacity: 0.5 }
  };

  const style = getStyleForModifiers(dayModifiers, {}, modifiersStyles);

  expect(style).toEqual({ opacity: 0.5 }); // should not have applied the disabled style
});

test("combines multiple active modifier styles", () => {
  const dayModifiers: Modifiers = {
    ...defaultModifiers,
    selected: true,
    highlighted: true
  };
  const modifiersStyles: Partial<ModifiersStyles> = {
    selected: { backgroundColor: "blue" },
    highlighted: { borderColor: "yellow" }
  };
  const expectedStyle: CSSProperties = {
    ...modifiersStyles.selected,
    ...modifiersStyles.highlighted
  };

  const style = getStyleForModifiers(dayModifiers, {}, modifiersStyles);

  expect(style).toEqual(expectedStyle);
});

test("applies the most recent modifier style when there are conflicts", () => {
  const dayModifiers: Modifiers = {
    ...defaultModifiers,
    selected: true,
    highlighted: true
  };
  const modifiersStyles: Partial<ModifiersStyles> = {
    selected: { backgroundColor: "blue", color: "red" }, // 'color' should be overridden.
    highlighted: { backgroundColor: "yellow", color: "green" }
  };
  const expectedStyle: CSSProperties = {
    backgroundColor: "yellow", // from 'highlighted'
    color: "green" // from 'highlighted', overriding 'selected'
  };

  const style = getStyleForModifiers(dayModifiers, {}, modifiersStyles);

  expect(style).toEqual(expectedStyle);
});
