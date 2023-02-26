import React, { createContext, ReactNode, useContext } from 'react';

import { DayPickerProps } from 'DayPicker';

import { getCalendar } from './utils/getCalendar';
import { DayPickerCalendar } from './types';

export const CalendarContext = createContext<DayPickerCalendar | undefined>(
  undefined
);

/** The props for the {@link CalendarProvider}. */
export interface CalendarProviderProps {
  /** The initial props from the DayPicker component. */
  initialProps: DayPickerProps;
  children?: ReactNode;
}
/**
 * The provider for the {@link CalendarContext}, storing the calendar state.
 */
export function CalendarProvider(props: CalendarProviderProps) {
  const calendar = getCalendar(props.initialProps);
  return (
    <CalendarContext.Provider value={calendar}>
      {props.children}
    </CalendarContext.Provider>
  );
}

/**
 * Hook to access the {@link CalendarContext}.
 *
 * Use the Calendar context to access to the months and date displayed in DayPicker.
 */
export function useCalendar(): DayPickerCalendar {
  const context = useContext(CalendarContext);
  if (!context)
    throw new Error(`useCalendar must be used within a CalendarProvider.`);

  return context;
}
