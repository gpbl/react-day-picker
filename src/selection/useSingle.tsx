import React from "react";

import { useProps } from "../contexts/index.js";
import { Modifiers, PropsSingle } from "../types/index.js";

export type SingleContextValue<T> = {
  setSelected: (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => void;
  isSelected: (date: Date) => boolean;
} & (T extends { required: true }
  ? {
      selected: Date;
    }
  : {
      selected: Date | undefined;
    });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SingleContext = React.createContext<SingleContextValue<any> | undefined>(
  undefined
);

function useSingleContextValue<T extends PropsSingle>({
  required = false,
  selected,
  onSelect
}: T): SingleContextValue<T> {
  const [date, setDate] = React.useState<Date | undefined>(selected);
  const {
    dateLib: { isSameDay },
    today,
    mode
  } = useProps();
  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (required && date === undefined) {
      setDate(today);
    }
  }, [required, date, today]);

  // Update the selected date if the `selected` value changes.
  React.useEffect(() => {
    if (mode !== "single") return;
    setDate(selected);
  }, [mode, selected]);

  const isSelected = (compareDate: Date) => {
    return date ? isSameDay(date, compareDate) : false;
  };

  const setSelected = (
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => {
    let newDate: Date | undefined = triggerDate;
    if (!required && date && date && isSameDay(triggerDate, date)) {
      // If the date is the same, clear the selection.
      newDate = undefined;
    }
    setDate(newDate);
    onSelect?.(newDate, triggerDate, modifiers, e);
    return newDate;
  };

  return { selected: date, setSelected, isSelected } as SingleContextValue<T>;
}

/** @private */
export function SingleProvider(props: React.PropsWithChildren<PropsSingle>) {
  const value = useSingleContextValue(props);
  return (
    <SingleContext.Provider value={value}>
      {props.children}
    </SingleContext.Provider>
  );
}

/**
 * Access to the single context to get the selected date or update it.
 *
 * Use this hook from the custom components passed via the `components` prop.
 *
 * @group Hooks
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function useSingle() {
  const context = React.useContext(SingleContext);
  if (!context) {
    throw new Error("useSingle() must be used within a SingleContextProvider");
  }
  return context;
}
