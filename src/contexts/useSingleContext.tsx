import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode
} from "react";

import { isSameDay } from "date-fns";

import { SelectionModifier } from "../UI";

interface UseSingleOptions {
  /** If the date is required. */
  required?: boolean;
  /** The initial value of the selection. */
  initialValue?: Date;
}

type UseSingle<T> = T extends { required: true }
  ? {
      value: Date;
      setValue: React.Dispatch<React.SetStateAction<Date>>;
      isSelected: (date: Date) => boolean;
      modifiers: SelectionModifier;
    }
  : {
      value: Date | undefined;
      setValue: React.Dispatch<React.SetStateAction<Date | undefined>>;
      isSelected: (date: Date) => boolean;
    };

function useSingle<T extends UseSingleOptions>({
  required = false,
  initialValue
}: T): UseSingle<T> {
  const [date, setDate] = useState<Date | undefined>(initialValue);

  useEffect(() => {
    if (required && date === undefined) {
      setDate(new Date());
    }
  }, [required, date]);

  const isSelected = (compareDate: Date) => {
    return date ? isSameDay(date, compareDate) : false;
  };

  const setValue = (newDate: Date | undefined) => {
    setDate((prevDate) => {
      if (newDate === undefined && required) {
        // If the date is required, do not allow to clear the selection.
        return required ? prevDate : undefined;
      }
      if (prevDate && newDate && isSameDay(prevDate, newDate)) {
        // If the date is the same, clear the selection.
        return required ? newDate : undefined;
      }
      return newDate;
    });
  };

  return {
    value: date,
    setValue,
    isSelected
  } as UseSingle<T>;
}

interface SingleContextValue {
  value: Date | undefined;
  setValue: React.Dispatch<React.SetStateAction<Date | undefined>>;
  isSelected: (date: Date) => boolean;
}

const SingleContext = createContext<SingleContextValue | undefined>(undefined);

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

export function useSingleContext(): SingleContextValue {
  const context = useContext(SingleContext);
  if (!context) {
    throw new Error("useSingleContext must be used within a SingleProvider");
  }
  return context;
}
