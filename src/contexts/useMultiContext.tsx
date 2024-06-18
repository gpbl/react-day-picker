import React from "react";

import { isSameDay } from "date-fns";

export interface MultiContextOptions {
  /** If the date is required. */
  required?: boolean;
  /** The initial value of the selection. */
  defaultSelected?: Date[];
  /** The minimum number of dates that can be selected. */
  min?: number;
  /** The maximum number of dates that can be selected. */
  max?: number;
}

export type MultiContextValue<T> = T extends { required: true }
  ? {
      selected: Date[];
      setSelected: (selected: Date) => void;
      isSelected: (date: Date) => boolean;
    }
  : {
      selected: Date[] | undefined;
      setSelected: (selected: Date) => void;
      isSelected: (date: Date) => boolean;
    };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MultiContext = React.createContext<MultiContextValue<any> | undefined>(
  undefined
);

function useMulti<T extends MultiContextOptions>({
  required = false,
  min = undefined,
  max = undefined,
  defaultSelected
}: T): MultiContextValue<T> {
  const [dates, setDates] = React.useState<Date[] | undefined>(defaultSelected);

  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (required && dates === undefined) setDates([new Date()]);
  }, [required, dates]);

  // Update the selected date if the initialValue changes.
  React.useEffect(() => {
    if (defaultSelected) setDates(defaultSelected);
  }, [defaultSelected]);

  const isSelected = (date: Date) =>
    dates?.some((d) => isSameDay(d, date)) ?? false;

  const setSelected = (date: Date) => {
    if (isSelected(date)) {
      if (dates?.length === min) {
        // Min value reached, do nothing
        return;
      }
      if (required && dates?.length === 1) {
        // Required value already selected do nothing
        return;
      }
      setDates(dates?.filter((d) => !isSameDay(d, date)));
    } else {
      if (dates?.length === max) {
        // Max value reached, reset the selection to date
        setDates([date]);
      } else {
        // Add the date to the selection
        setDates([...(dates ?? []), date]);
      }
    }
  };

  return {
    selected: dates,
    setSelected,
    isSelected
  } as MultiContextValue<T>;
}

export function MultiProvider({
  children,
  initialValue,
  min,
  max,
  required = false
}: {
  children: React.ReactNode;
  min: number | undefined;
  max: number | undefined;
  initialValue: Date[] | undefined;
  required?: boolean;
}) {
  const contextValue = useMulti({ required, initialValue, min, max });

  return (
    <MultiContext.Provider value={contextValue}>
      {children}
    </MultiContext.Provider>
  );
}
/** @group Contexts */
export function useMultiContext<
  T extends MultiContextOptions
>(): MultiContextValue<T> {
  const context = React.useContext(MultiContext);
  if (!context) {
    throw new Error(
      "useMultiContext must be used within a MultiContextProvider."
    );
  }
  return context as MultiContextValue<T>;
}
