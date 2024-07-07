import React from "react";

import {
  DateLib,
  DateRange,
  DayPickerProps,
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
  isRangeStart: (date: Date) => boolean;
  isRangeEnd: (date: Date) => boolean;
  isRangeMiddle: (date: Date) => boolean;
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
    if (mode !== "range") return;
    if (range === selected) return;
    setRange(selected);
  }, [mode, range, selected]);

  const isSelected = required
    ? (date: Date) => isDateInRange(date, range as DateRange, dateLib)
    : (date: Date) => range && isDateInRange(date, range, dateLib);

  const setSelected = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    if (mode !== "range") return;
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
        if (disabled && dateMatchModifiers(newDate, disabled, dateLib)) {
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

  const isRangeStart = (date: Date) => {
    return (
      range && range.from && range.to && dateLib.isSameDay(date, range.from)
    );
  };

  const isRangeEnd = (date: Date) => {
    return range && range.to && dateLib.isSameDay(date, range.to);
  };

  const isRangeMiddle = (date: Date) => {
    return (
      range &&
      range.from &&
      range.to &&
      isSelected(date) &&
      !isRangeStart(date) &&
      !isRangeEnd(date)
    );
  };

  return {
    selected: range,
    handleSelect: setSelected,
    isSelected,
    isRangeStart,
    isRangeEnd,
    isRangeMiddle
  } as UseRange<T>;
}
