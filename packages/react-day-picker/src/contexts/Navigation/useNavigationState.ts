import startOfMonth from 'date-fns/startOfMonth';

import { useDayPicker } from 'contexts/DayPicker';
import { useControlledValue } from 'hooks/useControlledValue';

import { getInitialMonth } from './utils/getInitialMonth';

/** Controls the navigation state. */
export function useNavigationState(): [
  /** The month DayPicker is navigating at */
  month: Date,
  /** Go to the specified month. */
  goToMonth: (month: Date) => void
] {
  const context = useDayPicker();
  const initialMonth = getInitialMonth(context);
  const [month, setMonth] = useControlledValue(initialMonth, context.month);

  const goToMonth = (date: Date) => {
    if (context.disableNavigation) return;
    const month = startOfMonth(date);
    setMonth(month);
    context.onMonthChange?.(month);
  };

  return [month, goToMonth];
}
