import React from 'react';

import { DayPickerContext } from './DayPickerContext';
import { DayPickerContextValue } from './types';

/** Hook to access the [[DayPickerContext]]. */
export function useDayPicker(): DayPickerContextValue {
  const context = React.useContext(DayPickerContext);
  if (!context) {
    throw new Error(
      'useDayPickerContext must be used within a DayPickerProvider'
    );
  }
  return context;
}
