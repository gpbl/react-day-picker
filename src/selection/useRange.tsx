import React from "react";

import {
  DateLib,
  DateRange,
  DayPickerProps,
  Mode,
  Modifiers,
  PropsRange,
  PropsRangeRequired
} from "../types/index.js";
import { addToRange, dateMatchModifiers } from "../utils/index.js";
import { isDateInRange } from "../utils/isDateInRange.js";

export type UseRange<T> = {
  handleSelect: (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => DateRange | undefined;
  isSelected: (date: Date) => boolean;
} & (T extends { required: true }
  ? {
      selected: DateRange;
    }
  : {
      selected: DateRange | undefined;
    });

export function useRange<T extends DayPickerProps>(
  props: T extends { mode: "range" } ? PropsRange | PropsRangeRequired : object,
  dateLib: DateLib
): UseRange<T> {
  const { mode, disabled, selected, required, onSelect } = props as PropsRange;

  const { differenceInCalendarDays } = dateLib;
  const [range, setRange] = React.useState<DateRange | undefined>(
    mode === "range" ? selected : undefined
  );

  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (mode !== "range") return;
    if (required && range === undefined) {
      setRange({ from: undefined, to: undefined });
    }
  }, [required, range, mode]);

  // Update the selected date if the selected changes.
  React.useEffect(() => {
    setRange(selected);
  }, [mode, selected]);

  const isSelected = required
    ? (date: Date) => isDateInRange(date, range as DateRange, dateLib)
    : (date: Date) => range && isDateInRange(date, range, dateLib);

  const setSelected = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    const newRange = triggerDate
      ? addToRange(triggerDate, range, dateLib)
      : undefined;
    const { min, max } = props as PropsRange;

    if (min) {
      if (
        newRange?.from &&
        newRange.to &&
        differenceInCalendarDays(newRange.to, newRange.from) < min - 1
      ) {
        newRange.from = triggerDate;
        newRange.to = undefined;
      }
    }

    if (max) {
      if (
        newRange?.from &&
        newRange.to &&
        differenceInCalendarDays(newRange.to, newRange.from) >= max
      ) {
        newRange.from = triggerDate;
        newRange.to = undefined;
      }
    }

    if (newRange?.from && newRange.to) {
      let newDate = newRange.from;
      while (dateLib.differenceInCalendarDays(newRange.to, newDate) > 0) {
        newDate = dateLib.addDays(newDate, 1);
        if (disabled && dateMatchModifiers(newDate, disabled)) {
          newRange.from = triggerDate;
          newRange.to = undefined;
          break;
        }
      }
    }

    setRange(newRange);
    onSelect?.(newRange, triggerDate, modifiers, e);

    return newRange;
  };

  return {
    selected: range,
    handleSelect: setSelected,
    isSelected
  } as UseRange<T>;
}
