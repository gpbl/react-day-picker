import * as React from 'react';

import { isSameMonth } from 'date-fns';

import { useDayPicker } from '../../contexts/DayPicker';

import { getInitialMonth } from './utils/getInitialMonth';
import { useControllablePropState } from '../useControllablePropState';

/** Controls the navigation state. */
export function useNavigationState(): [
  /** The month DayPicker is navigating at */
  month: Date,
  /** Go to the specified month. */
  goToMonth: (month: Date) => void
] {
  const context = useDayPicker();
  const [month, setMonth] = useControllablePropState({
    value: context.month,
    defaultValue: getInitialMonth(context)
  });

  const goToMonth = (date: Date) => {
    if (context.disableNavigation) return;
    setMonth(date);
  };

  return [month, goToMonth];
}
