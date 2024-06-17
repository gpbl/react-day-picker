import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode
} from "react";

import { isSameDay } from "date-fns";

interface UseMultiOptions {
  /** If the date is required. */
  required?: boolean;
  /** The initial value of the selection. */
  initialValue?: Date[];
  /** The minimum number of dates that can be selected. */
  min?: number;
  /** The maximum number of dates that can be selected. */
  max?: number;
}

type UseMulti<T> = T extends { required: true }
  ? {
      selected: Date[];
      setSelected: React.Dispatch<React.SetStateAction<Date[]>>;
      isSelected: (date: Date) => boolean;
    }
  : {
      selected: Date[] | undefined;
      setSelected: React.Dispatch<React.SetStateAction<Date[] | undefined>>;
      isSelected: (date: Date) => boolean;
    };

function useMulti<T extends UseMultiOptions>({
  required = false,
  min = undefined,
  max = undefined,
  initialValue
}: T): UseMulti<T> {
  const [selected, setValue] = useState<Date[] | undefined>(initialValue);

  // Update the selected date if the required flag is set.
  useEffect(() => {
    if (required && selected === undefined) {
      setValue([new Date()]);
    }
  }, [required, selected]);

  // Update the selected date if the initialValue changes.
  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  const isSelected = (date: Date) =>
    selected?.some((d) => isSameDay(d, date)) ?? false;

  const setSelected = (date: Date) => {
    let newValue: Date[] | undefined;
    if (isSelected(date)) {
      if (selected?.length === 1 || selected?.length === min) {
        // min reached - cannot remove date
        newValue = [date];
      } else {
        // remove the date
        newValue = selected?.filter((d) => !isSameDay(d, date));
      }
    } else if (selected?.length === max) {
      // Max value reached, reset the selection to date
      newValue = [date];
    } else {
      // Add the date to the selection
      newValue = [...(selected ?? []), date];
    }
    setValue(newValue);
  };

  return {
    value: selected,
    setSelected: setSelected,
    isSelected
  } as unknown as UseMulti<T>;
}

export interface MultiContextValue {
  value: Date[] | undefined;
  setValue: React.Dispatch<React.SetStateAction<Date[] | undefined>>;
  isSelected: (date: Date) => boolean;
}

const MultiContext = createContext<MultiContextValue | undefined>(undefined);

export function MultiProvider({
  children,
  required = false,
  initialValue,
  min,
  max
}: {
  children: ReactNode;
  required: boolean;
  min: number | undefined;
  max: number | undefined;
  initialValue: Date[] | undefined;
}) {
  const contextValue = useMulti({ required, initialValue, min, max });

  return (
    <MultiContext.Provider value={contextValue}>
      {children}
    </MultiContext.Provider>
  );
}
/** @group Contexts */
export function useMultiContext(): MultiContextValue {
  const context = useContext(MultiContext);
  if (!context) {
    throw new Error("useSingleContext must be used within a SingleProvider");
  }
  return context;
}
