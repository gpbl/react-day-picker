import React from "react";

import type {
  DateLib,
  DayPickerProps,
  Modifiers,
  PropsSingle,
  SelectHandler,
  SelectedValue,
  Selection
} from "../types/index.js";

export type UseSingle<T extends DayPickerProps> = {
  select: SelectHandler<T>;
  isSelected: (date: Date) => boolean;
  selected: SelectedValue<T>;
};

export function useSingle<T extends DayPickerProps>(
  props: DayPickerProps,
  dateLib: DateLib
): Selection<T> {
  const {
    selected: initiallySelected,
    required,
    onSelect,
    mode
  } = props as PropsSingle;

  const [selected, setSelected] = React.useState<Date | undefined>(
    initiallySelected
  );

  const { isSameDay, Date, startOfDay } = dateLib;
  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (required && selected === undefined) {
      setSelected(startOfDay(new Date()));
    }
  }, [required, selected, Date, startOfDay, mode]);

  // Update the selected date if the `selected` value changes.
  React.useEffect(() => {
    setSelected(initiallySelected);
  }, [initiallySelected]);

  const isSelected = (compareDate: Date) => {
    return selected ? isSameDay(selected, compareDate) : false;
  };

  const select = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    let newDate: Date | undefined = triggerDate;
    if (!required && selected && selected && isSameDay(triggerDate, selected)) {
      // If the date is the same, clear the selection.
      newDate = undefined;
    }
    setSelected(newDate);
    if (required) {
      onSelect?.(newDate as Date, triggerDate, modifiers, e);
    } else {
      onSelect?.(newDate, triggerDate, modifiers, e);
    }
    return newDate;
  };

  return {
    selected,
    select,
    isSelected
  } as Selection<T>;
}
