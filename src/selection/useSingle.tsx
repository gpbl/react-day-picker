import React from "react";

import { useControlledValue } from "../helpers/useControlledValue.js";
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
    onSelect
  } = props as PropsSingle;

  const [selected, setSelected] = useControlledValue(
    initiallySelected,
    onSelect ? initiallySelected : undefined
  );

  const { isSameDay } = dateLib;

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
