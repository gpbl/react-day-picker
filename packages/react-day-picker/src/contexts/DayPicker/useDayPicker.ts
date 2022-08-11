import { useContext } from 'react';

import { DayPickerContext, DayPickerContextValue } from './DayPickerContext';

/**
 * Hook to access the {@link DayPickerContextValue}. Use the DayPicker context to read the props passed to DayPicker inside internal or custom components.
 *
 * This hook requires a parent wrapped by {@link DayPickerProvider} (already added when using custom components).
 */
export function useDayPicker(): DayPickerContextValue {
  const context = useContext(DayPickerContext);
  if (!context) {
    throw new Error(`useDayPicker must be used within a DayPickerProvider.`);
  }
  return context;
}
