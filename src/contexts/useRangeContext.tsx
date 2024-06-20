import React from "react";

import { differenceInCalendarDays } from "date-fns";

import { PropsRange } from "../types/props";
import { DateRange, Modifiers } from "../types/shared";
import { addToRange, isDateRange } from "../utils";
import { isDateInRange } from "../utils/isDateInRange";

export type RangeContextValue<T> = {
  setSelected: (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => DateRange | undefined;
  isSelected: (date: Date) => boolean;
} & (T extends { required: true }
  ? {
      selected: DateRange;
    }
  : {
      selected: DateRange | undefined;
    });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RangeContext = React.createContext<RangeContextValue<any> | undefined>(
  undefined
);

function useRange<T extends PropsRange>({
  required,
  min,
  max,
  selected,
  onSelect
}: T): RangeContextValue<T> {
  const [range, setRange] = React.useState<DateRange | undefined>(selected);

  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (required && range === undefined)
      setRange({ from: undefined, to: undefined });
  }, [required, range]);

  // Update the selected date if the selected changes.
  React.useEffect(() => {
    if (selected) setRange(selected);
  }, [selected]);

  const isSelected = required
    ? (date: Date) => isDateInRange(date, range as DateRange)
    : (date: Date) => range && isDateInRange(date, range);

  const setSelected = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    const newRange = addToRange(triggerDate, range);

    if (min) {
      if (
        newRange?.from &&
        newRange.to &&
        differenceInCalendarDays(newRange.to, newRange.from) <= min
      ) {
        newRange.from = triggerDate;
        newRange.to = undefined;
      }
    }

    if (max) {
      if (
        newRange?.from &&
        newRange.to &&
        differenceInCalendarDays(newRange.to, newRange.from) + 1 > max
      ) {
        newRange.from = triggerDate;
        newRange.to = undefined;
      }
    }

    setRange(newRange);
    onSelect?.(newRange, triggerDate, modifiers, e);
    return newRange;
  };

  return {
    selected: range,
    setSelected,
    isSelected
  } as RangeContextValue<T>;
}

/** @private */
export function RangeProvider(props: React.PropsWithChildren<PropsRange>) {
  const value = useRange(props);
  return (
    <RangeContext.Provider value={value}>
      {props.children}
    </RangeContext.Provider>
  );
}

/**
 * Access to the range context to get the selected range or update it.
 *
 * @group Contexts
 */
export function useRangeContext<T extends { required: boolean }>() {
  const context = React.useContext(RangeContext);
  if (!context) {
    throw new Error(
      "useRangeContext() must be used within a RangeContextProvider."
    );
  }
  return context as RangeContextValue<T>;
}
