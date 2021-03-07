import * as React from 'react';

import { isSameDay } from 'date-fns';

import {
  DayClickEventHandler,
  isArrayOfDates,
  isDateRange,
  isSameDateMatcher,
  Matcher,
  Modifiers
} from '../../types';
import { useDayPicker } from '../useDayPicker';
import { addToRange } from './utils/addToRange';

// TODO: the following interface should extend some internal modifiers
/** The modifiers to add added when days are selected. */
export interface SelectionModifiers extends Partial<Modifiers> {
  /** Selection will add this modifier to the days that have been selected. */
  selected?: Matcher[];
  /** Selection will add this modifier to the day that is starting a selected range. */
  range_start?: Matcher;
  /** Selection will add this modifier to the days inside a range. */
  range_middle?: Matcher;
  /** Selection will add this modifier to the day that is starting a selected range. */
  range_end?: Matcher;
  /** Selection will add this modifier when the min/max amount of days has been selected. */
  disabled?: Matcher;
}

export type SelectionContextValue = {
  /** The days that are selected. */
  selected: Matcher | undefined;
  /** The modifiers to assign to the days in the calendar according to the selection status. */
  modifiers: SelectionModifiers;
  /** The event handler to add to the `dayclick` event to enable days selection on click. */
  handleDayClick: DayClickEventHandler;
  /** Reset the selected days to its initial state. */
  reset: () => void;
};

/** Store the selection state when `mode` is not `uncontrolled`. */
export const SelectionContext = React.createContext<
  SelectionContextValue | undefined
>(undefined);

export type SelectionProviderProps = {
  children: React.ReactNode;
};

/**
 * Provides the setters and values for the controlled selection modes.
 */
export const SelectionProvider = (
  props: SelectionProviderProps
): JSX.Element => {
  const {
    defaultSelected,
    max,
    min,
    mode,
    onDayClick,
    onSelect,
    onSelectMultiple,
    onSelectRange
  } = useDayPicker();

  let initialSelected: Matcher | undefined;
  switch (mode) {
    case 'single':
      initialSelected = defaultSelected;
      break;
    case 'multiple':
      initialSelected = defaultSelected ?? [];
      break;
    case 'range':
      initialSelected = defaultSelected ?? { from: undefined };
      break;
    default:
      break;
  }

  const [selection, setSelection] = React.useState<Matcher | undefined>(
    initialSelected
  );

  /** Event handler when selection mode is "single". */
  const handleDayClickSingle: DayClickEventHandler = (day, modifiers, e) => {
    if (selection && !isSameDateMatcher(selection)) {
      return;
    }
    if (modifiers.selected && min !== 1) {
      setSelection(undefined);
      onSelect?.(undefined, day, modifiers, e);
      return;
    }
    setSelection(day);
    onSelect?.(day, day, modifiers, e);
  };

  /** Event handler when selection mode is "multiple". */
  const handleDayClickMultiple: DayClickEventHandler = (day, modifiers, e) => {
    if (!isArrayOfDates(selection)) {
      return;
    }
    const { selected } = modifiers;
    const isMinSelected = Boolean(min && selected && selection.length <= min);

    if (isMinSelected) {
      onDayClick?.(day, modifiers, e);
      return;
    }

    const days = [...selection];
    if (selected) {
      const index = selection.findIndex((value) => isSameDay(day, value));
      days.splice(index, 1);
    } else {
      days.push(day);
    }
    setSelection(days);
    onSelectMultiple?.(days, day, modifiers, e);
    onDayClick?.(day, modifiers, e);
  };

  /** Event handler when selection mode is "range". */
  const handleDayClickRange: DayClickEventHandler = (day, modifiers, e) => {
    if (!isDateRange(selection)) {
      return;
    }

    const newValue = addToRange(day, selection, false);
    setSelection(newValue);
    onSelectRange?.(newValue, day, modifiers, e);
    onDayClick?.(day, modifiers, e);
  };

  const handleDayClick: DayClickEventHandler = (day, modifiers, e) => {
    switch (mode) {
      case 'single':
        handleDayClickSingle(day, modifiers, e);
        break;
      case 'multiple':
        handleDayClickMultiple(day, modifiers, e);
        break;
      case 'range':
        handleDayClickRange(day, modifiers, e);
        break;
    }
  };

  const reset = () => {
    setSelection(defaultSelected);
  };

  const modifiers: SelectionModifiers = {};

  // TODO: move to a new file
  if (mode !== 'uncontrolled' && selection) {
    if (mode === 'single' && isSameDateMatcher(selection)) {
      modifiers.selected = [selection];
    }
    if (mode === 'multiple' && isArrayOfDates(selection)) {
      modifiers.selected = selection;
      const isMaxSelected = max && selection.length > max - 1;
      modifiers.disabled = (day: Date) => {
        const isSelected = selection.some((selectedDay) =>
          isSameDay(selectedDay, day)
        );
        return Boolean(isMaxSelected && !isSelected);
      };
    }

    if (mode === 'range' && isDateRange(selection)) {
      modifiers.selected = [selection];
      if (selection.from) {
        modifiers.range_start = selection.from;
        if (selection.to) {
          modifiers.range_middle = {
            after: selection.from,
            before: selection.to
          };
          modifiers.range_end = selection.to;
        } else {
          modifiers.range_end = selection.from;
        }
      }
    }
  }
  return (
    <SelectionContext.Provider
      value={{
        selected: selection,
        handleDayClick,
        reset,
        modifiers
      }}
    >
      {props.children}
    </SelectionContext.Provider>
  );
};
