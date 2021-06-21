import * as React from 'react';

import { DayPickerContextValue } from './DayPickerContextValue';

/**
 * The DayPicker context shares the props passed to DayPicker within the
 * internal components. It is used to set the default values and  perform
 * one-time calculations required to render the days.
 *
 * Access this context from the [[useDayPicker]] hook when using custom
 * components.
 */
export const DayPickerContext = React.createContext<
  DayPickerContextValue | undefined
>(undefined);
