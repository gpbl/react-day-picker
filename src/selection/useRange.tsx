import React from "react";

import type {
  DateLib,
  DateRange,
  DayPickerProps,
  Modifiers,
  PropsRange,
  Selection
} from "../types/index.js";
import { addToRange, dateMatchModifiers } from "../utils/index.js";
import { rangeIncludesDate } from "../utils/rangeIncludesDate.js";

export function useRange<T extends DayPickerProps>(
  props: T,
  dateLib: DateLib
): Selection<T> {
  const {
    mode,
    disabled,
    excludeDisabled,
    selected: initiallySelected,
    required,
    onSelect
  } = props as PropsRange;

  const [selected, setSelected] = React.useState<DateRange | undefined>(
    initiallySelected
  );

  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (required && selected === undefined) {
      setSelected({ from: undefined, to: undefined });
    }
  }, [required, selected, mode]);

  // Update the selected date if the `selected` prop changes.
  React.useEffect(() => {
    setSelected(initiallySelected);
  }, [initiallySelected]);

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

    if (newRange?.from && newRange.to) {
      let newDate = newRange.from;
      while (dateLib.differenceInCalendarDays(newRange.to, newDate) > 0) {
        newDate = dateLib.addDays(newDate, 1);
        if (
          excludeDisabled &&
          disabled &&
          dateMatchModifiers(newDate, disabled, dateLib)
        ) {
          // if a disabled days is found, the range is reset
          newRange.from = triggerDate;
          newRange.to = undefined;
          break;
        }
      }
    }

    setSelected(newRange);
    onSelect?.(newRange, triggerDate, modifiers, e);

    return newRange;
  };

  return {
    selected,
    select,
    isSelected
  } as Selection<T>;
}
