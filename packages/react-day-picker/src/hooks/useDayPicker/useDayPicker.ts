import React from 'react';

import { DayPickerContext } from '../../components/DayPicker';
import { DayPickerContextValue } from '../../types';

/**
 * An hook for using the DayPicker context used for rendering the internal
 * components.
 *
 * Use this hook for building your custom components.
 */
export function useDayPicker(): DayPickerContextValue {
  return React.useContext(DayPickerContext);
}
