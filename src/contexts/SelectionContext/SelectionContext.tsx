import type { PropsWithChildren, MouseEvent } from 'react';
import { createContext, useContext, useState } from 'react';

import { isSameDay } from 'date-fns';

import { useDayPicker } from '../../contexts/DayPickerContext';
import type { DayPickerProps, SelectHandler } from '../../DayPicker';
import { isDateRange, type Modifiers } from '../../types';
import { addToRange } from './utils/addToRange';
import { isDateInRange } from '../../utils/isDateInRange';

export type SelectionContext = {
  selected: DayPickerProps['selected'];
  setSelected: (
    date: Date,
    modifiers: Modifiers,
    e: MouseEvent
  ) => DayPickerProps['selected'];
  isSelected: (date: Date) => boolean;
};

const contextValue = {
  selected: undefined,
  setSelected: () => undefined,
  isSelected: () => false
};
export const selectionContext = createContext<SelectionContext>(contextValue);

/**
 * The provider for the {@link selectionContext}, storing the calendar state.
 */
export function SelectionProvider(providerProps: PropsWithChildren) {
  const { required, onSelect, mode, ...dayPicker } = useDayPicker();
  const [selection, setSelection] = useState(dayPicker.selected);

  function setSingle(date: Date, modifiers: Modifiers, e: MouseEvent) {
    let selected: Date | undefined;
    if (modifiers.selected && !required) {
      selected = undefined;
    } else {
      selected = date;
    }
    setSelection(selected);
    (onSelect as SelectHandler<'single'>)?.(selected, date, modifiers, e);
    return selected;
  }
  function isSingleSelected(date: Date) {
    return Boolean(selection && isSameDay(selection as Date, date));
  }

  function setMulti(date: Date, modifiers: Modifiers, e: MouseEvent) {
    if (selection !== undefined && !Array.isArray(selection)) return;
    let selected: Date[] | undefined = [];
    if (modifiers.selected && !required) {
      selected = selection?.filter((day) => !isSameDay(day, date));
    } else {
      selected = [...(selection ?? []), date];
    }
    setSelection(selected);
    (onSelect as SelectHandler<'multi'>)?.(selected, date, modifiers, e);
    return selected;
  }
  function isMultiSelected(date: Date) {
    if (selection !== undefined && !Array.isArray(selection)) return false;

    return Boolean(selection && selection.some((day) => isSameDay(day, date)));
  }
  function setRange(date: Date, modifiers: Modifiers, e: MouseEvent) {
    if (selection !== undefined && !isDateRange(selection)) return;
    const selected = addToRange(date, selection);
    setSelection(selected);
    (onSelect as SelectHandler<'range'>)?.(selected, date, modifiers, e);
    return selection;
  }
  function isRangeSelected(date: Date) {
    if (selection !== undefined && !isDateRange(selection)) {
      // Not a range select
      return false;
    }
    return Boolean(selection && isDateInRange(date, selection));
  }

  function setSelected(date: Date, modifiers: Modifiers, e: MouseEvent) {
    if (mode === 'single') return setSingle(date, modifiers, e);
    if (mode === 'multi') return setMulti(date, modifiers, e);
    if (mode === 'range') return setRange(date, modifiers, e);
    return setSingle(date, modifiers, e);
  }

  function isSelected(date: Date) {
    if (mode === 'single') return isSingleSelected(date);
    if (mode === 'multi') return isMultiSelected(date);
    if (mode === 'range') return isRangeSelected(date);
    return isSingleSelected(date);
  }

  const value = {
    selected: selection,
    setSelected,
    isSelected
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
