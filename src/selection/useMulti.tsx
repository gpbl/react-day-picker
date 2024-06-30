import React from "react";

import type {
  DateLib,
  DayPickerProps,
  Modifiers,
  PropsMulti,
  PropsMultiRequired
} from "../types/index.js";

export type UseMulti<T> = {
  handleSelect: (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => Date[] | undefined;
  isSelected: (date: Date) => boolean;
} & (T extends { required: true }
  ? {
      selected: Date[];
    }
  : {
      selected: Date[] | undefined;
    });

export function useMulti<T extends DayPickerProps>(
  props: T extends { mode: "multiple" }
    ? PropsMulti | PropsMultiRequired
    : object,
  dateLib: DateLib
): UseMulti<T> {
  const { selected, required, onSelect } = props as PropsMulti;
  const [dates, setDates] = React.useState<Date[] | undefined>(selected);

  const { isSameDay, Date } = dateLib;

  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (required && dates === undefined) {
      setDates([new Date()]);
    }
  }, [required, dates, Date]);

  // Update the selected date if the selected value from props changes.
  React.useEffect(() => {
    setDates(selected);
  }, [selected]);

  const isSelected = (date: Date) => {
    return dates?.some((d) => isSameDay(d, date)) ?? false;
  };

  const { min, max } = props as PropsMulti;

  const setSelected = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    let newDates: Date[] | undefined = [...(dates ?? [])];
    if (isSelected(triggerDate)) {
      if (dates?.length === min) {
        // Min value reached, do nothing
        return;
      }
      if (required && dates?.length === 1) {
        // Required value already selected do nothing
        return;
      }
      newDates = dates?.filter((d) => !isSameDay(d, triggerDate));
    } else {
      if (dates?.length === max) {
        // Max value reached, reset the selection to date
        newDates = [triggerDate];
      } else {
        // Add the date to the selection
        newDates = [...newDates, triggerDate];
      }
    }
    onSelect?.(newDates, triggerDate, modifiers, e);
    setDates(newDates);
    return newDates;
  };

  return {
    selected: dates,
    handleSelect: setSelected,
    isSelected
  } as UseMulti<T>;
}
