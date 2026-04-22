import type React from "react";

import type { DateLib } from "../classes/DateLib.js";
import { useControlledValue } from "../helpers/useControlledValue.js";
import type {
  DayPickerProps,
  Modifiers,
  PropsSingle,
  SelectedValue,
  SelectHandler,
  Selection,
} from "../types/index.js";

export type UseSingle<T extends DayPickerProps> = {
  select: SelectHandler<T>;
  isSelected: (date: Date) => boolean;
  selected: SelectedValue<T>;
};

/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */
export function useSingle<T extends DayPickerProps>(
  props: DayPickerProps,
  dateLib: DateLib,
): Selection<T> {
  const {
    selected: initiallySelected,
    required,
    onSelect,
  } = props as PropsSingle;

  const [internallySelected, setSelected] = useControlledValue(
    initiallySelected,
    onSelect ? initiallySelected : undefined,
  );

  const selected = !onSelect ? internallySelected : initiallySelected;

  const { isSameDay } = dateLib;

  const isSelected = (compareDate: Date) => {
    return selected ? isSameDay(selected, compareDate) : false;
  };

  const select = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent,
  ) => {
    let newDate: Date | undefined = triggerDate;
    if (!required && selected && selected && isSameDay(triggerDate, selected)) {
      // If the date is the same, clear the selection.
      newDate = undefined;
    }
    if (!onSelect) {
      setSelected(newDate);
    }
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
    isSelected,
  } as Selection<T>;
}
