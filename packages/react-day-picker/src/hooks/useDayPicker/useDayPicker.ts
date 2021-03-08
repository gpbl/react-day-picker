import React from 'react';

import { ContextValue } from 'types';

import { DayPickerContext } from './DayPickerContext';

/**
 * Hook to access the [[DayPickerContext]].
 */
export function useDayPicker(): ContextValue {
  const context = React.useContext(DayPickerContext);
  if (!context) {
    throw new Error(
      'useDayPickerContext must be used within a DayPickerProvider'
    );
  }
  return context;
}
