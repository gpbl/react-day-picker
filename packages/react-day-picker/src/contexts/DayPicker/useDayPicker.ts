import { useContext } from 'react';

import { DayPickerContext, DayPickerContextValue } from './DayPickerContext';

/**
 * Hook to access the {@link DayPickerContext}.
 *
 * To use this hook make sure to wrap the components with a one
 * {@link DayPickerProvider}.
 */
export function useDayPicker(): DayPickerContextValue {
  const context = useContext(DayPickerContext);
  if (!context) {
    throw new Error(`useDayPicker must be used within a DayPickerProvider.`);
  }
  return context;
}
