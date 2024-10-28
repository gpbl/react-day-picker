import React from "react";

import type { DateLib } from "../classes/DateLib.js";
import { useControlledValue } from "../helpers/useControlledValue.js";
import type {
  DayPickerProps,
  Modifiers,
  PropsRange,
  Selection
} from "../types/index.js";
import { addToRange, rangeContainsModifiers } from "../utils/index.js";
import { rangeIncludesDate } from "../utils/rangeIncludesDate.js";

export function useRange<T extends DayPickerProps>(
  props: T,
  dateLib: DateLib
): Selection<T> {
  const {
    disabled,
    excludeDisabled,
    selected: initiallySelected,
    required,
    onSelect
  } = props as PropsRange;

  const [internallySelected, setSelected] = useControlledValue(
    initiallySelected,
    onSelect ? initiallySelected : undefined
  );

  const selected = !onSelect ? internallySelected : initiallySelected;

  const isSelected = (date: Date) =>
    selected && rangeIncludesDate(selected, date, false, dateLib);

  const select = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    const { min, max } = props as PropsRange;
    const newRange = triggerDate
      ? addToRange(triggerDate, selected, min, max, required, dateLib)
      : undefined;

    if (excludeDisabled && disabled && newRange?.from && newRange.to) {
      if (
        rangeContainsModifiers(
          { from: newRange.from, to: newRange.to },
          disabled,
          dateLib
        )
      ) {
        // if a disabled days is found, the range is reset
        newRange.from = triggerDate;
        newRange.to = undefined;
      }
    }

    if (!onSelect) {
      setSelected(newRange);
    }
    onSelect?.(newRange, triggerDate, modifiers, e);

    return newRange;
  };

  return {
    selected,
    select,
    isSelected
  } as Selection<T>;
}
