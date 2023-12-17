import type { PropsWithChildren, MouseEvent, KeyboardEvent } from 'react';
import { createContext, useContext, useState } from 'react';

import {
  addDays,
  differenceInCalendarDays,
  isSameDay,
  subDays
} from 'date-fns';

import { useDayPicker } from '../../contexts/DayPickerContext';
import type { Selected } from '../../DayPicker';
import { isDateRange, Matcher, Mode, type Modifiers } from '../../types';
import { addToRange } from './utils/addToRange';
import { isDateInRange } from '../../utils/isDateInRange';
import { dateMatchModifiers } from '../ModifiersContext/utils/dateMatchModifiers';
import { useControlledValue } from '../../utils/useControlledValue';

export type SelectionContext = {
  /** The currently selected value. */
  selected: Selected<Mode> | undefined;
  setSelected: (
    date: Date,
    modifiers: Modifiers,
    e: MouseEvent | KeyboardEvent
  ) => void;
  isSelected: (date: Date) => boolean;
  excluded: Matcher[];
  isExcluded: (date: Date) => boolean;
};

const contextValue: SelectionContext = {
  selected: undefined,
  setSelected: () => undefined,
  isSelected: () => false,
  excluded: [],
  isExcluded: () => false
};
export const selectionContext = createContext<SelectionContext>(contextValue);

/**
 * The provider for the `selectionContext`, storing the calendar state.
 */
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
    modifiers: Modifiers,
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

  /** Set the selected days when in "multi" mode. */
  function setMulti(
    date: Date,
    modifiers: Modifiers,
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
  function setRange(
    date: Date,
    modifiers: Modifiers,
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

    onSelect?.(selected, date, modifiers, e);
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
    modifiers: Modifiers,
    e: MouseEvent | KeyboardEvent
  ) {
    if (mode === 'single') setSingle(date, modifiers, e);
    if (mode === 'multi') setMulti(date, modifiers, e);
    if (mode === 'range') setRange(date, modifiers, e);
  }

  function isSelected(date: Date) {
    if (mode === 'single') return isSingleSelected(date);
    if (mode === 'multi') return isMultiSelected(date);
    if (mode === 'range') return isRangeSelected(date);
    return false;
  }

  function isExcluded(date: Date) {
    return dateMatchModifiers(date, excluded);
  }

  const value = {
    selected: selection,
    setSelected,
    excluded,
    isSelected,
    isExcluded
  };

  return (
    <selectionContext.Provider value={value}>
      {providerProps.children}
    </selectionContext.Provider>
  );
}

/**
 * Use this hook to access to the dates displayed in the calendar and to navigate between months.
 */
export function useSelection() {
  const context = useContext(selectionContext);
  if (!context) {
    throw new Error(`useSelection must be used within a SelectionProvider.`);
  }
  return context;
}
