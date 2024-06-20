import React from "react";

import { isSameDay } from "date-fns";

import type { Modifiers, PropsMulti } from "../types";

export type MultiContextValue<T> = {
  setSelected: (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => Date[] | undefined;
  isSelected: (date: Date) => boolean;
} & (T extends { required: true }
  ? {
      selected: Date[];
    }
  : {
      selected: Date[] | undefined;
    });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MultiContext = React.createContext<MultiContextValue<any> | undefined>(
  undefined
);

function useMulti<T extends PropsMulti>({
  required = false,
  min = undefined,
  max = undefined,
  selected,
  onSelect
}: T): MultiContextValue<T> {
  const [dates, setDates] = React.useState<Date[] | undefined>(selected);

  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (required && dates === undefined) setDates([new Date()]);
  }, [required, dates]);

  // Update the selected date if the initialDates changes.
  React.useEffect(() => {
    if (selected) setDates(selected);
  }, [selected]);

  const isSelected = (date: Date) =>
    dates?.some((d) => isSameDay(d, date)) ?? false;

  const setSelected = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    let newDates = [...(dates ?? [])];
    if (isSelected(triggerDate)) {
      if (dates?.length === min) {
        // Min value reached, do nothing
        return;
      }
      if (required && dates?.length === 1) {
        // Required value already selected do nothing
        return;
      }
      const newDates = dates?.filter((d) => !isSameDay(d, triggerDate));
      setDates(newDates);
    } else {
      if (dates?.length === max) {
        // Max value reached, reset the selection to date
        newDates = [triggerDate];
      } else {
        // Add the date to the selection
        newDates = [...newDates, triggerDate];
      }
    }
    onSelect?.(newDates, triggerDate, modifiers, e);
    setDates(newDates);
    return newDates;
  };

  return {
    selected: dates,
    setSelected,
    isSelected
  } as MultiContextValue<T>;
}

/** @private */
export function MultiProvider(props: React.PropsWithChildren<PropsMulti>) {
  const value = useMulti(props);
  return (
    <MultiContext.Provider value={value}>
      {props.children}
    </MultiContext.Provider>
  );
}

/**
 * Access to the multi context to get the selected dates or update them.
 *
 * @group Contexts
 */
export function useMultiContext<T extends { required: boolean }>() {
  const context = React.useContext(MultiContext);
  if (!context) {
    throw new Error(
      "useMultiContext must be used within a MultiContextProvider."
    );
  }
  return context as MultiContextValue<T>;
}
