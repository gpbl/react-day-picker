import React from "react";

import { useProps } from "../contexts";
import { Modifiers, PropsSingle } from "../types";

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
    dateLib: { isSameDay, Date }
  } = useProps();
  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (required && date === undefined) setDate(new Date());
  }, [required, date, Date]);

  // Update the selected date if the selected changes.
  React.useEffect(() => {
    if (selected) setDate(selected);
  }, [selected]);

  const isSelected = (compareDate: Date) =>
    date ? isSameDay(date, compareDate) : false;

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
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function useSingle() {
  const context = React.useContext(SingleContext);
  if (!context) {
    throw new Error("useSingle() must be used within a SingleContextProvider");
  }
  return context;
}
