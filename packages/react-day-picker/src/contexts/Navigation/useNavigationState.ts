import * as React from 'react';

import { isSameMonth } from 'date-fns';

import { useDayPicker } from '../../contexts/DayPicker';

import { getInitialMonth } from './utils/getInitialMonth';
import { useControllablePropState } from '../../hooks/useControllablePropState';

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

  // Update month if updated from context.
  React.useEffect(() => {
    // TODO: return void also if `context.defaultMonth`?
    if (!context.month) return;
    if (isSameMonth(context.month, month)) return;
    setMonth(context.month);
  }, [context.month, month, setMonth]);

  return [month, goToMonth];
}
