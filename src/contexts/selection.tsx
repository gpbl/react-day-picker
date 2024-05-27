import type { KeyboardEvent, MouseEvent, PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";

import { addDays } from "date-fns/addDays";
import { differenceInCalendarDays } from "date-fns/differenceInCalendarDays";
import { isSameDay } from "date-fns/isSameDay";
import { subDays } from "date-fns/subDays";

import { useControlledValue } from "../helpers/useControlledValue";
import type { Matcher, Mode, DayModifiers, Selected } from "../types";
import { useDayPicker } from "../types-deprecated";
import { addToRange } from "../utils/addToRange";
import { dateMatchModifiers } from "../utils/dateMatchModifiers";
import { isDateInRange } from "../utils/isDateInRange";
import { isDateRange } from "../utils/typeguards";

/**
 * The Selection context provides access to the currently selected value, allows
 * setting the selected days, and provides methods to check if a day is selected
 * or excluded.
 *
 * Access the selection context using the {@link useSelection} hook.
 *
 * @group Contexts
 */
export interface SelectionContext {
  /** The currently selected value. */
  selected: Selected<Mode> | undefined;
  /** Set the selected days. */
  setSelected: (
    date: Date,
    modifiers: DayModifiers,
    e: MouseEvent | KeyboardEvent
  ) => void;
  /** Return `true` if the given day is selected. */
  isSelected: (date: Date) => boolean;
  /** The excluded days. */
  excluded: Matcher[];
  /** Return `true` if the given day is excluded. */
  isExcluded: (date: Date) => boolean;
  isStartOfRange: (date: Date) => boolean;
  isEndOfRange: (date: Date) => boolean;
  isMiddleOfRange: (date: Date) => boolean;
}

const contextValue: SelectionContext = {
  selected: undefined,
  setSelected: () => undefined,
  isSelected: () => false,
  excluded: [],
  isExcluded: () => false,
  isStartOfRange: () => false,
  isEndOfRange: () => false,
  isMiddleOfRange: () => false
};

const selectionContext = createContext<SelectionContext>(contextValue);

/** @private */
export function SelectionProvider(providerProps: PropsWithChildren) {
  const { required, min, max, onSelect, mode, ...dayPicker } = useDayPicker();

  const [selection, setSelection] = useControlledValue(
    dayPicker.defaultSelected ?? dayPicker.selected,
    dayPicker.selected
  );
  const [excluded, setExcluded] = useState<Matcher[]>([]);

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
    setSelection(selected);
    onSelect?.(selected, date, modifiers, e);
    return selected;
  }

  /** Return `true` if the given day is selected in "single" mode. */
  function isSingleSelected(date: Date) {
    return Boolean(selection && isSameDay(selection as Date, date));
  }

  /** Set the selected days when in "multiple" mode. */
  function setMulti(
    date: Date,
    modifiers: DayModifiers,
    e: MouseEvent | KeyboardEvent
  ) {
    if (selection !== undefined && !Array.isArray(selection)) {
      // Not a multi select
      return;
    }
    let selected: Date[] | undefined = [];

    if (modifiers.selected) {
      // Date is already selected
      if (min && selection && selection.length <= min) {
        // Min value reached, do nothing
        selected = selection;
      } else {
        // Remove the date from the selection
        selected = selection?.filter((day) => !isSameDay(day, date));
      }
    } else if (max !== undefined && selection?.length === max) {
      // Max value reached, reset the selection to date
      selected = [date];
    } else {
      // Add the date to the selection
      selected = [...(selection ?? []), date];
    }
    setSelection(selected);
    onSelect?.(selected, date, modifiers, e);
    return selected;
  }
  function isMultiSelected(date: Date) {
    if (!Array.isArray(selection)) return false;

    return Boolean(selection?.some((day) => isSameDay(day, date)));
  }

  /** Set the selected days when in "range" mode. */
  function setRange(
    date: Date,
    modifiers: DayModifiers,
    e: MouseEvent | KeyboardEvent
  ) {
    if (selection !== undefined && !isDateRange(selection)) {
      return;
    }
    const selected = addToRange(date, selection);
    const excluded = [] as Matcher[];

    if (min) {
      if (selected?.from && !selected.to) {
        excluded.push({
          after: subDays(selected?.from, min - 1),
          before: addDays(selected?.from, min - 1)
        });
      }
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
      if (selected?.from && !selected.to) {
        excluded.push({
          before: addDays(selected?.from, -max + 1)
        });
        excluded.push({
          after: addDays(selected?.from, max - 1)
        });
      }
    }

    setExcluded(excluded);
    setSelection(selected);
    onSelect?.(selected, date, modifiers, e); // Now TypeScript knows it's a MouseEvent

    return selection;
  }
  function isRangeSelected(date: Date) {
    if (selection !== undefined && !isDateRange(selection)) {
      // Not a range select
      return false;
    }
    return Boolean(selection && isDateInRange(date, selection));
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

  function isExcluded(date: Date) {
    return dateMatchModifiers(date, excluded);
  }
  function isStartOfRange(date: Date) {
    if (!isDateRange(selection)) return false;
    return Boolean(selection.from && isSameDay(selection.from, date));
  }

  function isEndOfRange(date: Date) {
    if (!isDateRange(selection)) return false;
    return Boolean(selection.to && isSameDay(selection.to, date));
  }

  function isMiddleOfRange(date: Date) {
    if (!isDateRange(selection)) return false;
    if (!selection.from || !selection.to) return false;
    return (
      isDateInRange(date, {
        from: addDays(selection.from, 1),
        to: subDays(selection.to, 1)
      }) &&
      !isStartOfRange(date) &&
      !isEndOfRange(date)
    );
  }

  const value = {
    selected: selection,
    setSelected,
    excluded,
    isSelected,
    isExcluded,
    isStartOfRange,
    isEndOfRange,
    isMiddleOfRange
  };

  return (
    <selectionContext.Provider value={value}>
      {providerProps.children}
    </selectionContext.Provider>
  );
}

/**
 * Provides access and change the currently selected value.
 *
 * @group Hooks
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function useSelection(): SelectionContext {
  const context = useContext(selectionContext);
  if (!context) {
    throw new Error(`useSelection must be used within a SelectionProvider.`);
  }
  return context;
}
