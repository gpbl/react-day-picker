import { selected } from "react-day-picker/style.module.css";

import type { CalendarDay } from "../classes";
import type { DayModifiers, Mode, SelectionModifiers } from "../types";

import { usePropsContext } from "./usePropsContext";
import { useSingleContext } from "./useSingleContext";

export function useSelection() {
  const { mode } = usePropsContext();
  const single = useSingleContext();

  const getSelectionModifiers = (day: CalendarDay) => {
    const modifiers: SelectionModifiers = {
      selected: false,
      range_start: false,
      range_middle: false,
      range_end: false
    };

    if (mode === "single") {
      return single.isSelected(day.date)
        ? { ...modifiers, selected: true }
        : { ...modifiers, selected: false };
    }

    return modifiers;
  };

  const setSelected = (day: CalendarDay) => {
    if (mode === "single") {
      single.setValue(day.date);
    }
  };

  return {
    selected: single.value,
    setSelected,
    getSelectionModifiers
  };
}
