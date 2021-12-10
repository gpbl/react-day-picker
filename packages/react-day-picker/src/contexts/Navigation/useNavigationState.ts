import { useDayPicker } from '@contexts/DayPicker';

import { getInitialMonth } from './utils/getInitialMonth';
import { useControlledValue } from '../../hooks/useControlledValue';

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
    setMonth(date);
  };

  return [month, goToMonth];
}
