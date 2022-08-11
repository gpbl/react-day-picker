import { useContext } from 'react';

import { DayPickerContext, DayPickerContextValue } from './DayPickerContext';

/**
 * Hook to access the {@link DayPickerContextValue}.
 *
 * Use the DayPicker context to access to the props passed to DayPicker inside
 * internal or custom components.
 */
export function useDayPicker(): DayPickerContextValue {
  const context = useContext(DayPickerContext);
  if (!context) {
    throw new Error(`useDayPicker must be used within a DayPickerProvider.`);
  }
  return context;
}
