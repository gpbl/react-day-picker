import type { KeyboardEvent, MouseEvent, PropsWithChildren } from "react";
import { createContext, useContext } from "react";

import { addDays } from "date-fns/addDays";
import { differenceInCalendarDays } from "date-fns/differenceInCalendarDays";
import { isSameDay } from "date-fns/isSameDay";
import { subDays } from "date-fns/subDays";

import { useControlledValue } from "../helpers/useControlledValue";
import type { Mode, DayModifiers, Selected } from "../types";
import { addToRange } from "../utils/addToRange";
import { isDateInRange } from "../utils/isDateInRange";
import { isDateRange } from "../utils/typeguards";

import { useProps } from ".";

/**
 * Provides access to the currently selected value, allows setting the selected
 * days, and provides methods to check if a day is selected.
 *
 * Access the selection context using the {@link useSelection} hook.
 *
 * @group Contexts
 */
export interface SelectionContext<T extends Mode> {
  /** The currently selected value. */
  selected: Selected<T> | undefined;
  /** Set the selected days. */
  setSelected: (
    date: Date,
    modifiers: DayModifiers,
    e: MouseEvent | KeyboardEvent
  ) => void;
  /** Return `true` if the given day is selected. */
  isSelected: (date: Date) => boolean;
  /**
   * In range selection mode, return `true` if the given day is the start of the
   * range.
   */
  isStartOfRange: (date: Date) => boolean;
  /**
   * In range selection mode, return `true` if the given day is the end of the
   * range.
   */
  isEndOfRange: (date: Date) => boolean;
  /**
   * In range selection mode, return `true` if the given day is in the middle of
   * the range.
   */
  isMiddleOfRange: (date: Date) => boolean;
}

const contextValue: SelectionContext<Mode> = {
  selected: undefined,
  setSelected: () => undefined,
  isSelected: () => false,
  isStartOfRange: () => false,
  isEndOfRange: () => false,
  isMiddleOfRange: () => false
};

const selectionContext = createContext<SelectionContext<Mode>>(contextValue);

/** @private */
export function SelectionProvider(providerProps: PropsWithChildren) {
  const { required, min, max, onSelect, selected, defaultSelected, mode } =
    useProps();

  const [value, setValue] = useControlledValue(
    defaultSelected ?? selected,
    selected
  );

  /** Set the selected days when in "single" mode. */
  function setSingle(
    date: Date,
    modifiers: DayModifiers,
    e: MouseEvent | KeyboardEvent
  ) {
    let selected: Date | undefined;
    if (modifiers.selected && !required) {
      selected = undefined;
    } else {
      selected = date;
    }
    setValue(selected);
    onSelect?.(selected, date, modifiers, e);
    return selected;
  }

  /** Return `true` if the given day is selected in "single" mode. */
  function isSingleSelected(date: Date) {
    return Boolean(value && isSameDay(value as Date, date));
  }

  /** Set the selected days when in "multiple" mode. */
  function setMulti(
    date: Date,
    modifiers: DayModifiers,
    e: MouseEvent | KeyboardEvent
  ) {
    if (value !== undefined && !Array.isArray(value)) {
      // Not a multi select
      return;
    }
    let selected: Date[] = [];

    if (modifiers.selected) {
      // Date is already selected
      if (min && value && value.length <= min) {
        // Min value reached, do nothing
        selected = value;
      } else {
        // Remove the date from the selection
        selected = value?.filter((day) => !isSameDay(day, date)) || [];
      }
    } else if (max !== undefined && value?.length === max) {
      // Max value reached, reset the selection to date
      selected = [date];
    } else {
      // Add the date to the selection
      selected = [...(value ?? []), date];
    }
    setValue(selected);
    onSelect?.(selected, date, modifiers, e);
    return selected;
  }
  function isMultiSelected(date: Date) {
    if (!Array.isArray(value)) return false;

    return Boolean(value?.some((day) => isSameDay(day, date)));
  }

  /** Set the selected days when in "range" mode. */
  function setRange(
    date: Date,
    modifiers: DayModifiers,
    e: MouseEvent | KeyboardEvent
  ) {
    if (value !== undefined && !isDateRange(value)) {
      return;
    }
    const selected = addToRange(date, value);

    if (min) {
      if (
        selected?.from &&
        selected.to &&
        differenceInCalendarDays(selected.to, selected.from) <= min
      ) {
        selected.from = date;
        selected.to = undefined;
      }
    }

    if (max) {
      if (
        selected?.from &&
        selected.to &&
        differenceInCalendarDays(selected.to, selected.from) + 1 > max
      ) {
        selected.from = date;
        selected.to = undefined;
      }
    }

    setValue(selected);
    onSelect?.(selected, date, modifiers, e); // Now TypeScript knows it's a MouseEvent

    return value;
  }
  function isRangeSelected(date: Date) {
    if (value !== undefined && !isDateRange(value)) {
      // Not a range select
      return false;
    }
    return Boolean(value && isDateInRange(date, value));
  }

  function setSelected(
    date: Date,
    modifiers: DayModifiers,
    e: MouseEvent<Element> | KeyboardEvent<Element>
  ) {
    if (mode === "single") setSingle(date, modifiers, e);
    if (mode === "multiple") setMulti(date, modifiers, e);
    if (mode === "range") setRange(date, modifiers, e);
  }

  function isSelected(date: Date) {
    if (mode === "single") return isSingleSelected(date);
    if (mode === "multiple") return isMultiSelected(date);
    if (mode === "range") return isRangeSelected(date);
    return false;
  }

  function isStartOfRange(date: Date) {
    if (!isDateRange(value)) return false;
    return Boolean(value.from && isSameDay(value.from, date));
  }

  function isEndOfRange(date: Date) {
    if (!isDateRange(value)) return false;
    return Boolean(value.to && isSameDay(value.to, date));
  }

  function isMiddleOfRange(date: Date) {
    if (!isDateRange(value)) return false;
    if (!value.from || !value.to) return false;
    return (
      isDateInRange(date, {
        from: addDays(value.from, 1),
        to: subDays(value.to, 1)
      }) &&
      !isStartOfRange(date) &&
      !isEndOfRange(date)
    );
  }

  const contextValue = {
    selected: value,
    setSelected,
    isSelected,
    isStartOfRange,
    isEndOfRange,
    isMiddleOfRange
  };

  return (
    <selectionContext.Provider value={contextValue}>
      {providerProps.children}
    </selectionContext.Provider>
  );
}

/**
 * Access and change the currently selected values.
 *
 * Use this hook from the custom components passed via the `components` prop.
 *
 * @group Hooks
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function useSelection<T extends Mode>() {
  const context = useContext(selectionContext);
  if (!context) {
    throw new Error(`useSelection must be used within a SelectionProvider.`);
  }
  return context as SelectionContext<T>;
}
