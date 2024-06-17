import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction
} from "react";

import { isSameDay } from "date-fns";

export interface UseSingleOptions {
  /** If the date is required. */
  required?: boolean;
  /** The initial value of the selection. */
  initialValue?: Date;
}

type SingleContextValue<T> = T extends { required: true }
  ? {
      value: Date;
      setValue: Dispatch<SetStateAction<Date>>;
      isSelected: (date: Date) => boolean;
    }
  : {
      value: Date;
      setValue: Dispatch<SetStateAction<Date | undefined>>;
      isSelected: (date: Date) => boolean;
    };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SingleContext = createContext<SingleContextValue<any> | undefined>(
  undefined
);

/** @private */
function useSingle<T extends UseSingleOptions>({
  required = false,
  initialValue
}: T): SingleContextValue<T> {
  const [date, setDate] = useState<Date | undefined>(initialValue);

  // Update the selected date if the required flag is set.
  useEffect(() => {
    if (required && date === undefined) {
      setDate(new Date());
    }
  }, [required, date]);

  // Update the selected date if the initialValue changes.
  useEffect(() => {
    if (initialValue) {
      setDate(initialValue);
    }
  }, [initialValue]);

  const isSelected = (compareDate: Date) => {
    return date ? isSameDay(date, compareDate) : false;
  };

  const setValue = (newDate: Date | undefined) => {
    if (newDate === undefined && required) {
      // If the date is required, do not allow to clear the selection.
      return required ? date : undefined;
    }
    if (date && newDate && isSameDay(date, newDate)) {
      // If the date is the same, clear the selection.
      return required ? newDate : undefined;
    }
    return newDate;
  };

  return {
    value: date,
    setValue,
    isSelected
  } as SingleContextValue<T>;
}
/** @private */
export function SingleProvider({
  children,
  required = false,
  initialValue
}: {
  children: ReactNode;
  required?: boolean;
  initialValue?: Date;
}) {
  const contextValue = useSingle({ required, initialValue });

  return (
    <SingleContext.Provider value={contextValue}>
      {children}
    </SingleContext.Provider>
  );
}

/** @group Contexts */
export function useSingleContext<
  T extends UseSingleOptions
>(): SingleContextValue<T> {
  const context = useContext(SingleContext);
  if (!context) {
    throw new Error("useSingleContext must be used within a SingleProvider");
  }
  return context as SingleContextValue<T>;
}
