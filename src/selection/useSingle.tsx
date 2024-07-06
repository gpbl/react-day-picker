import React from "react";

import type {
  DateLib,
  DayPickerProps,
  Modifiers,
  PropsSingle,
  PropsSingleRequired
} from "../types/index.js";

export type UseSingle<T> = {
  handleSelect: (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => void;
  isSelected: (date: Date) => boolean;
} & (T extends { required: true }
  ? {
      selected: Date;
    }
  : {
      selected: Date | undefined;
    });

export function useSingle<T extends DayPickerProps>(
  props: T extends { mode: "single" }
    ? PropsSingle | PropsSingleRequired
    : object,
  dateLib: DateLib
): UseSingle<T> {
  const { selected, required, onSelect, mode } = props as PropsSingle;

  const [date, setDate] = React.useState<Date | undefined>(
    mode !== "single" ? undefined : selected
  );

  const { isSameDay, Date, startOfDay } = dateLib;
  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (mode !== "single") return;
    if (required && date === undefined) {
      setDate(startOfDay(new Date()));
    }
  }, [required, date, Date, startOfDay, mode]);

  // Update the selected date if the `selected` value changes.
  React.useEffect(() => {
    if (mode !== "single") return;
    setDate(selected);
  }, [mode, selected]);

  const isSelected = (compareDate: Date) => {
    return date ? isSameDay(date, compareDate) : false;
  };

  const setSelected = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    if (mode !== "single") return;
    let newDate: Date | undefined = triggerDate;
    if (!required && date && date && isSameDay(triggerDate, date)) {
      // If the date is the same, clear the selection.
      newDate = undefined;
    }
    setDate(newDate);
    if (required) {
      onSelect?.(newDate as Date, triggerDate, modifiers, e);
    } else {
      onSelect?.(newDate, triggerDate, modifiers, e);
    }
    return newDate;
  };

  return {
    selected: date,
    handleSelect: setSelected,
    isSelected
  } as UseSingle<T>;
}
