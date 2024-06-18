import React from "react";

import { differenceInCalendarDays } from "date-fns";

import { DateRange } from "../types";
import { addToRange, isDateRange } from "../utils";
import { isDateInRange } from "../utils/isDateInRange";

export interface RangeContextOptions {
  /** If the date is required. */
  required?: boolean;
  /** The initial value of the selection. */
  defaultSelected?: DateRange | undefined;
  /** The minimum number of dates that can be selected. */
  min?: number;
  /** The maximum number of dates that can be selected. */
  max?: number;
}

export type RangeContextValue<T> = T extends { required: true }
  ? {
      selected: DateRange;
      setSelected: (date: Date) => void;
      isSelected: (date: Date) => boolean;
    }
  : {
      selected: DateRange | undefined;
      setSelected: (date: Date | undefined) => void;
      isSelected: (date: Date) => boolean;
    };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RangeContext = React.createContext<RangeContextValue<any> | undefined>(
  undefined
);

function useRange<T extends RangeContextOptions>({
  required = false,
  min = undefined,
  max = undefined,
  defaultSelected
}: T): RangeContextValue<T> {
  const [range, setRange] = React.useState<DateRange | undefined>(
    defaultSelected
  );

  // Update the selected date if the required flag is set.
  React.useEffect(() => {
    if (required && range === undefined)
      setRange({ from: undefined, to: undefined });
  }, [required, range]);

  // Update the selected date if the initialValue changes.
  React.useEffect(() => {
    if (defaultSelected) setRange(defaultSelected);
  }, [defaultSelected]);

  const isSelected = required
    ? (date: Date) => isDateInRange(date, range as DateRange)
    : (date: Date) => range && isDateInRange(date, range);

  const setSelected = (date: Date | undefined) => {
    if (range !== undefined && !isDateRange(range)) {
      return;
    }
    const newRange = date ? addToRange(date, range) : undefined;

    if (min) {
      if (
        newRange?.from &&
        newRange.to &&
        differenceInCalendarDays(newRange.to, newRange.from) <= min
      ) {
        newRange.from = date;
        newRange.to = undefined;
      }
    }

    if (max) {
      if (
        newRange?.from &&
        newRange.to &&
        differenceInCalendarDays(newRange.to, newRange.from) + 1 > max
      ) {
        newRange.from = date;
        newRange.to = undefined;
      }
    }

    setRange(newRange);
  };

  return {
    selected: range,
    setSelected,
    isSelected
  } as RangeContextValue<T>;
}

export function RangeProvider({
  children,
  initialValue,
  min,
  max,
  required = false
}: {
  children: React.ReactNode;
  min: number | undefined;
  max: number | undefined;
  initialValue: DateRange | undefined;
  required?: boolean;
}) {
  const contextValue = useRange({ required, initialValue, min, max });

  return (
    <RangeContext.Provider value={contextValue}>
      {children}
    </RangeContext.Provider>
  );
}
/** @group Contexts */
export function useRangeContext<
  T extends RangeContextOptions
>(): RangeContextValue<T> {
  const context = React.useContext(RangeContext);
  if (!context) {
    throw new Error(
      "useRangeContext must be used within a RangeContextProvider."
    );
  }
  return context as RangeContextValue<T>;
}
