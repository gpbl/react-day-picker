import React from "react";

import { isSameDay } from "date-fns";

import { PropsSingle } from "../types/props";

export type SingleContextValue<T> = T extends { required: true }
  ? {
      selected: Date;
      setSelected: (date: Date) => void;
      isSelected: (date: Date) => boolean;
    }
  : {
      selected: Date | undefined;
      setSelected: (date: Date | undefined) => void;
      isSelected: (date: Date) => boolean;
    };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SingleContext = React.createContext<SingleContextValue<any> | undefined>(
  undefined
);

function useSingle<T extends PropsSingle>({
  required = false,
  selected
}: T): SingleContextValue<T> {
  const [date, setDate] = React.useState<Date | undefined>(selected);

  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (required && date === undefined) setDate(new Date());
  }, [required, date]);

  // Update the selected date if the selected changes.
  React.useEffect(() => {
    if (selected) setDate(selected);
  }, [selected]);

  const isSelected = (compareDate: Date) =>
    date ? isSameDay(date, compareDate) : false;

  const setSelected = (newDate: Date | undefined) => {
    if (newDate === undefined) {
      // If the date is required, do not allow to clear the selection.
      setDate(required ? date : undefined);
    } else if (!required && date && newDate && isSameDay(date, newDate)) {
      // If the date is the same, clear the selection.
      setDate(undefined);
    } else {
      setDate(newDate);
    }
  };
  return { selected: date, setSelected, isSelected } as SingleContextValue<T>;
}
/** @private */
export function SingleProvider(props: React.PropsWithChildren<PropsSingle>) {
  const value = useSingle(props);
  return (
    <SingleContext.Provider value={value}>
      {props.children}
    </SingleContext.Provider>
  );
}

/** @group Contexts */
export function useSingleContext() {
  const context = React.useContext(SingleContext);
  if (!context) {
    throw new Error(
      "useSingleContext must be used within a SingleContextProvider"
    );
  }
  return context;
}
