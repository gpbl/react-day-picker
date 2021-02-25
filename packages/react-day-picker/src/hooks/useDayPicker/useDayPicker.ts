import React from 'react';

import { DayPickerContext } from './DayPickerContext';

/**
 * Return the [[DayPickerContext]].
 *
 * Use the DayPickerContext to get the props and other values directly from the
 * internal components.
 */
export function useDayPicker(): DayPickerContext {
  const context = React.useContext(DayPickerContext);
  if (!context) {
    throw new Error(
      'useDayPickerContext must be used within a DayPickerProvider'
    );
  }
  return context;
}
