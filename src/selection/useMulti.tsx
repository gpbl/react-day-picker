import React from "react";

import type {
  DateLib,
  DayPickerProps,
  Modifiers,
  PropsMulti,
  Selection
} from "../types/index.js";

export function useMulti<T extends DayPickerProps>(
  props: T,
  dateLib: DateLib
): Selection<T> {
  const {
    selected: initiallySelected,
    required,
    onSelect,
    mode
  } = props as PropsMulti;
  const [selected, setSelected] = React.useState<Date[] | undefined>(
    initiallySelected
  );

  const { isSameDay } = dateLib;

  // Update the selected date if the selected value from props changes.
  React.useEffect(() => {
    setSelected(initiallySelected);
  }, [mode, initiallySelected]);

  const isSelected = (date: Date) => {
    return selected?.some((d) => isSameDay(d, date)) ?? false;
  };

  const { min, max } = props as PropsMulti;

  const select = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    let newDates: Date[] | undefined = [...(selected ?? [])];
    if (isSelected(triggerDate)) {
      if (selected?.length === min) {
        // Min value reached, do nothing
        return;
      }
      if (required && selected?.length === 1) {
        // Required value already selected do nothing
        return;
      }
      newDates = selected?.filter((d) => !isSameDay(d, triggerDate));
    } else {
      if (selected?.length === max) {
        // Max value reached, reset the selection to date
        newDates = [triggerDate];
      } else {
        // Add the date to the selection
        newDates = [...newDates, triggerDate];
      }
    }
    onSelect?.(newDates, triggerDate, modifiers, e);
    setSelected(newDates);
    return newDates;
  };

  return {
    selected,
    select,
    isSelected
  } as Selection<T>;
}
