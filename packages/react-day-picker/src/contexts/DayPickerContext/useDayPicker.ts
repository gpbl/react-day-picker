import * as React from 'react';

import { DayPickerContext } from './DayPickerContext';
import { DayPickerContextValue } from './DayPickerContextValue';

/**
 * Hook to access the [[DayPickerContext]].
 *
 * To use this hook make sure to wrap the components with a one
 * [[DayPickerProvider]].
 * */
export function useDayPicker(): DayPickerContextValue {
  const context = React.useContext(DayPickerContext);
  if (!context) {
    throw new Error(
      `Context is not defined. useDayPicker must be used within a DayPickerProvider with a valid values.`
    );
  }
  return context;
}
